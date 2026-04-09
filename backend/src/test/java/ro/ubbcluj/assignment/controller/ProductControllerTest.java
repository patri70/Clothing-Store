package ro.ubbcluj.assignment.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import ro.ubbcluj.assignment.dto.ProductDTO;
import ro.ubbcluj.assignment.service.ProductService;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.*;

class ProductControllerTest {

    private ProductService productService;
    private ProductController controller;

    @BeforeEach
    void setUp() {
        productService = mock(ProductService.class);
        controller = new ProductController(productService);
    }

    @Test
    void testCreateProduct() {
        ProductDTO dto = new ProductDTO(null, "Test", "Cat", 10.0, List.of(), 5.0, 100);
        ProductDTO created = new ProductDTO("#001", "Test", "Cat", 10.0, List.of(), 5.0, 100);
        when(productService.create(any(ProductDTO.class))).thenReturn(created);

        ResponseEntity<ProductDTO> response = controller.createProduct(dto);
        assertEquals(HttpStatus.CREATED, response.getStatusCode());
        assertNotNull(response.getBody());
        assertEquals("#001", response.getBody().getId());
    }

    @Test
    void testGetAllProducts() {
        when(productService.getAll(0, 10)).thenReturn(Arrays.asList(
                new ProductDTO("#001", "P1", "Cat", 10.0, List.of(), 5.0, 100),
                new ProductDTO("#002", "P2", "Cat", 20.0, List.of(), 5.0, 100)));

        ResponseEntity<List<ProductDTO>> response = controller.getAllProducts(0, 10);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(2, response.getBody().size());

        // Edge case sanitation
        ResponseEntity<List<ProductDTO>> responseSanitized = controller.getAllProducts(-5, -5);
        assertEquals(HttpStatus.OK, responseSanitized.getStatusCode());
    }

    @Test
    void testGetProductByIdFound() {
        ProductDTO found = new ProductDTO("#001", "P1", "Cat", 10.0, List.of(), 5.0, 100);
        when(productService.getById("#001")).thenReturn(found);

        ResponseEntity<ProductDTO> response = controller.getProductById("#001");
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("P1", response.getBody().getName());
    }

    @Test
    void testGetProductByIdNotFound() {
        when(productService.getById("#999")).thenReturn(null);
        ResponseEntity<ProductDTO> response = controller.getProductById("#999");
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testUpdateProductSuccess() {
        ProductDTO updatedDTO = new ProductDTO("#001", "New", "Cat", 20.0, List.of(), 5.0, 100);
        when(productService.update(eq("#001"), any(ProductDTO.class))).thenReturn(updatedDTO);

        ResponseEntity<ProductDTO> response = controller.updateProduct("#001", new ProductDTO());
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals("New", response.getBody().getName());
    }

    @Test
    void testUpdateProductNotFound() {
        when(productService.update(eq("#999"), any(ProductDTO.class))).thenReturn(null);
        ResponseEntity<ProductDTO> response = controller.updateProduct("#999", new ProductDTO());
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testDeleteProductSuccess() {
        when(productService.delete("#001")).thenReturn(true);
        ResponseEntity<Void> response = controller.deleteProduct("#001");
        assertEquals(HttpStatus.NO_CONTENT, response.getStatusCode());
    }

    @Test
    void testDeleteProductNotFound() {
        when(productService.delete("#999")).thenReturn(false);
        ResponseEntity<Void> response = controller.deleteProduct("#999");
        assertEquals(HttpStatus.NOT_FOUND, response.getStatusCode());
    }

    @Test
    void testGetAveragePrice() {
        when(productService.getAveragePrice()).thenReturn(150.5);
        ResponseEntity<Map<String, Double>> response = controller.getAveragePrice();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertTrue(response.getBody().containsKey("averagePrice"));
        assertEquals(150.5, response.getBody().get("averagePrice"));
    }
}

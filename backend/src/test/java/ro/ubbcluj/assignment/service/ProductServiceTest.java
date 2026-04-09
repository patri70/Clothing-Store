package ro.ubbcluj.assignment.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import ro.ubbcluj.assignment.dto.ProductDTO;
import ro.ubbcluj.assignment.model.Product;
import ro.ubbcluj.assignment.repository.ProductRepository;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class ProductServiceTest {

    private ProductRepository repository;
    private ProductService service;

    @BeforeEach
    void setUp() {
        repository = mock(ProductRepository.class);
        service = new ProductService(repository);
    }

    @Test
    void createProduct() {
        ProductDTO dto = new ProductDTO(null, "Test", "Cat", 10.0, List.of(), 5.0, 100);
        Product savedEntity = new Product("#001", "Test", "Cat", 10.0, List.of(), 5.0, 100);

        when(repository.save(any(Product.class))).thenReturn(savedEntity);

        ProductDTO result = service.create(dto);
        assertEquals("#001", result.getId());
        verify(repository, times(1)).save(any(Product.class));
    }

    @Test
    void getByIdFound() {
        Product p = new Product("#001", "T1", "Cat", 10.0, List.of(), 5.0, 100);
        when(repository.findById("#001")).thenReturn(Optional.of(p));

        ProductDTO dto = service.getById("#001");
        assertNotNull(dto);
        assertEquals("T1", dto.getName());
    }

    @Test
    void getByIdNotFound() {
        when(repository.findById("#999")).thenReturn(Optional.empty());
        assertNull(service.getById("#999"));
    }

    @Test
    void getAll() {
        when(repository.findAll(0, 10)).thenReturn(Arrays.asList(
                new Product("#001", "P1", "Cat", 10.0, List.of(), 5.0, 100),
                new Product("#002", "P2", "Cat", 20.0, List.of(), 5.0, 100)));

        List<ProductDTO> dtos = service.getAll(0, 10);
        assertEquals(2, dtos.size());
    }

    @Test
    void updateExistingProduct() {
        Product existing = new Product("#001", "Old", "OldCat", 10.0, List.of(), 5.0, 100);
        Product updated = new Product("#001", "New", "NewCat", 20.0, List.of(), 5.0, 100);

        when(repository.findById("#001")).thenReturn(Optional.of(existing));
        when(repository.save(any(Product.class))).thenReturn(updated); // returning the already updated entity

        ProductDTO newDto = new ProductDTO(null, "New", "NewCat", 20.0, List.of(), 5.0, 100);
        ProductDTO result = service.update("#001", newDto);

        assertNotNull(result);
        assertEquals("New", result.getName());
        assertEquals("NewCat", result.getCategory());
        assertEquals(20.0, result.getPrice());
    }

    @Test
    void updateNonExistingProduct() {
        when(repository.findById("#999")).thenReturn(Optional.empty());
        assertNull(service.update("#999", new ProductDTO()));
    }

    @Test
    void deleteExisting() {
        when(repository.findById("#001")).thenReturn(Optional.of(new Product()));
        assertTrue(service.delete("#001"));
        verify(repository, times(1)).deleteById("#001");
    }

    @Test
    void deleteNonExisting() {
        when(repository.findById("#999")).thenReturn(Optional.empty());
        assertFalse(service.delete("#999"));
        verify(repository, never()).deleteById(anyString());
    }

    @Test
    void getAveragePrice() {
        when(repository.findAll()).thenReturn(Arrays.asList(
                new Product("#001", "P1", "Cat", 100.0, List.of(), 5.0, 100),
                new Product("#002", "P2", "Cat", 200.0, List.of(), 5.0, 100)));

        assertEquals(150.0, service.getAveragePrice());
    }

    @Test
    void getAveragePriceEmpty() {
        when(repository.findAll()).thenReturn(List.of());
        assertEquals(0.0, service.getAveragePrice());
    }
}

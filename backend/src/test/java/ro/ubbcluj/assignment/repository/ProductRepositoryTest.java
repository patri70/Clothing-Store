package ro.ubbcluj.assignment.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import ro.ubbcluj.assignment.model.Product;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

class ProductRepositoryTest {

    private ProductRepository repository;

    @BeforeEach
    void setUp() {
        repository = new ProductRepository();
    }

    @Test
    void testSaveAssignsIdAndSaves() {
        Product p = new Product(null, "Test", "Cat", 10.0, List.of("M"), 5.0, 100);
        Product saved = repository.save(p);
        assertNotNull(saved.getId());
        assertTrue(saved.getId().startsWith("#"));
        assertEquals(1, repository.count());

        // test custom ID manually setting
        Product p2 = new Product("#999", "Test", "Cat", 10.0, List.of("M"), 5.0, 100);
        Product saved2 = repository.save(p2);
        assertEquals("#999", saved2.getId());
        assertEquals(2, repository.count());
    }

    @Test
    void testFindById() {
        Product p = repository.save(new Product(null, "Test", "Cat", 10.0, List.of("M"), 5.0, 100));
        Optional<Product> found = repository.findById(p.getId());
        assertTrue(found.isPresent());
        assertEquals("Test", found.get().getName());

        assertFalse(repository.findById("#INVALID").isPresent());
    }

    @Test
    void testFindAll() {
        repository.save(new Product(null, "P1", "Cat", 10.0, List.of("M"), 5.0, 100));
        repository.save(new Product(null, "P2", "Cat", 20.0, List.of("S"), 4.0, 200));
        List<Product> all = repository.findAll();
        assertEquals(2, all.size());
    }

    @Test
    void testPaginationAndSanitization() {
        for (int i = 0; i < 25; i++) {
            repository.save(new Product(null, "P" + i, "Cat", 10.0, List.of(), 5.0, 100));
        }

        List<Product> page0 = repository.findAll(0, 10);
        assertEquals(10, page0.size());

        List<Product> page2 = repository.findAll(2, 10);
        assertEquals(5, page2.size());

        List<Product> badPage = repository.findAll(-1, -5);
        assertEquals(10, badPage.size()); // defaults to page 0, size 10
    }

    @Test
    void testDeleteById() {
        Product p = repository.save(new Product(null, "Test", "Cat", 10.0, List.of(), 5.0, 100));
        assertEquals(1, repository.count());

        repository.deleteById(p.getId());
        assertEquals(0, repository.count());
        assertFalse(repository.findById(p.getId()).isPresent());
    }

    @Test
    void testDeleteAll() {
        repository.save(new Product());
        repository.deleteAll();
        assertEquals(0, repository.count());
    }
}

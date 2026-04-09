package ro.ubbcluj.assignment.repository;

import org.springframework.stereotype.Repository;
import ro.ubbcluj.assignment.model.Product;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.stream.Collectors;

@Repository
public class ProductRepository {
    private final ConcurrentHashMap<String, Product> memoryStorage = new ConcurrentHashMap<>();
    private final AtomicLong currentId = new AtomicLong(1);

    public Product save(Product product) {
        if (product.getId() == null || product.getId().isEmpty()) {
            product.setId("#" + String.format("%03d", currentId.getAndIncrement()));
        }
        memoryStorage.put(product.getId(), product);
        return product;
    }

    public Optional<Product> findById(String id) {
        return Optional.ofNullable(memoryStorage.get(id));
    }

    public List<Product> findAll() {
        return new ArrayList<>(memoryStorage.values());
    }

    public List<Product> findAll(int page, int size) {
        if (page < 0)
            page = 0;
        if (size <= 0)
            size = 10;

        int skip = page * size;
        return memoryStorage.values().stream()
                .skip(skip)
                .limit(size)
                .collect(Collectors.toList());
    }

    public long count() {
        return memoryStorage.size();
    }

    public void deleteById(String id) {
        memoryStorage.remove(id);
    }

    public void deleteAll() {
        memoryStorage.clear();
        currentId.set(1);
    }
}

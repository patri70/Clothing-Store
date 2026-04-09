package ro.ubbcluj.assignment.service;

import org.springframework.stereotype.Service;
import ro.ubbcluj.assignment.dto.ProductDTO;
import ro.ubbcluj.assignment.model.Product;
import ro.ubbcluj.assignment.repository.ProductRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {
    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    private ProductDTO toDTO(Product product) {
        return new ProductDTO(
                product.getId(), product.getName(), product.getCategory(),
                product.getPrice(), product.getSizes(), product.getRating(), product.getSales());
    }

    private Product toEntity(ProductDTO dto) {
        return new Product(
                dto.getId(), dto.getName(), dto.getCategory(),
                dto.getPrice(), dto.getSizes(), dto.getRating(), dto.getSales());
    }

    public ProductDTO create(ProductDTO productDTO) {
        Product product = toEntity(productDTO);
        Product saved = productRepository.save(product);
        return toDTO(saved);
    }

    public ProductDTO getById(String id) {
        return productRepository.findById(id).map(this::toDTO).orElse(null);
    }

    public List<ProductDTO> getAll(int page, int size) {
        return productRepository.findAll(page, size).stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }

    public ProductDTO update(String id, ProductDTO productDTO) {
        return productRepository.findById(id).map(existing -> {
            existing.setName(productDTO.getName());
            existing.setCategory(productDTO.getCategory());
            existing.setPrice(productDTO.getPrice());
            existing.setSizes(productDTO.getSizes());
            existing.setRating(productDTO.getRating());
            existing.setSales(productDTO.getSales());
            Product updated = productRepository.save(existing);
            return toDTO(updated);
        }).orElse(null);
    }

    public boolean delete(String id) {
        if (productRepository.findById(id).isPresent()) {
            productRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public Double getAveragePrice() {
        List<Product> all = productRepository.findAll();
        if (all.isEmpty())
            return 0.0;
        return all.stream().mapToDouble(Product::getPrice).average().orElse(0.0);
    }
}

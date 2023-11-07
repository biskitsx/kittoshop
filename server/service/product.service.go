package service

import (
	"github.com/biskitsx/kittoshop/server/repository"
)

type productService struct {
	productRepository repository.ProductRepository
}

func NewProductService(productRepository repository.ProductRepository) ProductService {
	return &productService{productRepository: productRepository}
}

func (s *productService) GetAll(queries map[string]string) ([]GetProductResponse, error) {
	products, err := s.productRepository.FindAll(queries)
	if err != nil {
		return nil, err
	}
	var res []GetProductResponse
	for _, product := range products {
		res = append(res, GetProductResponse{
			ID:      product.ID.Hex(),
			Name:    product.Name,
			Price:   product.Price,
			Colors:  product.Colors,
			Rating:  product.Rating,
			Picture: product.Picture,
			Size:    product.Size,
			Type:    product.Type,
		})
	}
	return res, nil
}

func (s *productService) Create(name string, price float64, picture string, rating float64, colors []string, size []string, types string) (*GetProductResponse, error) {
	product := repository.Product{
		Name:    name,
		Price:   price,
		Picture: picture,
		Rating:  rating,
		Colors:  colors,
		Size:    size,
		Type:    types,
	}
	res, err := s.productRepository.Create(product)
	if err != nil {
		return nil, err
	}
	return &GetProductResponse{
		ID:      res.ID.Hex(),
		Name:    res.Name,
		Price:   res.Price,
		Colors:  res.Colors,
		Rating:  res.Rating,
		Picture: res.Picture,
		Size:    res.Size,
		Type:    res.Type,
	}, nil
}

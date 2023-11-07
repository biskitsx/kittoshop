package service

type ProductService interface {
	Create(string, float64, string, float64, []string, []string, string) (*GetProductResponse, error)
	GetAll(map[string]string) ([]GetProductResponse, error)
}

type CreateProductRequest struct {
	Name   string   `json:"name"`
	Price  float64  `json:"price"`
	Colors []string `json:"colors"`
	Rating float64  `json:"rating"`
	Size   []string `json:"size"`
	Type   string   `json:"type"`
}

type GetProductResponse struct {
	ID      string   `json:"id"`
	Name    string   `json:"name"`
	Price   float64  `json:"price"`
	Colors  []string `json:"colors"`
	Rating  float64  `json:"rating"`
	Picture string   `json:"picture"`
	Size    []string `json:"size"`
	Type    string   `json:"type"`
}

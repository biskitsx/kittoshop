package repository

import "go.mongodb.org/mongo-driver/bson/primitive"

type Product struct {
	ID      primitive.ObjectID `bson:"_id,omitempty"`
	Name    string             `bson:"name,omitempty"`
	Price   float64            `bson:"price,omitempty"`
	Picture string             `bson:"picture,omitempty"`
	Rating  float64            `bson:"rating,omitempty"`
	Colors  []string           `bson:"color,omitempty"`
	Size    []string           `bson:"size,omitempty"`
	Type    string             `bson:"type,omitempty"`
}

type ProductRepository interface {
	Create(Product) (*Product, error)
	FindAll(map[string]string) ([]Product, error)
	FindById(id string) (*Product, error)
}

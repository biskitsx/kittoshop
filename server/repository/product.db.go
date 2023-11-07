package repository

import (
	"context"
	"strings"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type productRepository struct {
	db *mongo.Database
}

func NewProductRepository(client *mongo.Client) ProductRepository {
	return &productRepository{client.Database("kittoshop")}
}

func StringToInt(str string) int {
	var result int
	for _, i := range str {
		result = result*10 + int(i-'0')
	}
	return result
}
func stringInSlice(a string, list []string) bool {
	for _, b := range list {
		if b == a {
			return true
		}
	}
	return false
}

func (r *productRepository) FindAll(queries map[string]string) ([]Product, error) {
	coll := r.db.Collection("products")
	filter := bson.D{}
	for key, value := range queries {
		if key == "colors" || key == "size" {
			continue
		}
		if key == "lowest_price" {
			filter = append(filter, bson.E{Key: "price", Value: bson.M{"$gt": StringToInt(value)}})
		} else if key == "highest_price" {
			filter = append(filter, bson.E{Key: "price", Value: bson.M{"$lt": StringToInt(value)}})
		} else {
			filter = append(filter, bson.E{Key: key, Value: bson.D{{"$regex", value}}})
		}
	}
	opt := options.Find().SetSkip(0).SetLimit(100)

	cursor, err := coll.Find(context.Background(), filter, opt)
	if err != nil {
		return nil, err
	}
	var products []Product
	if err := cursor.All(context.Background(), &products); err != nil {
		return nil, err
	}

	var result []Product
	if queries["colors"] != "" || queries["size"] != "" {
		if queries["colors"] != "" {
			array_color := strings.Split(queries["colors"], ",")
			for _, product := range products {
				for _, color := range array_color {
					if stringInSlice(color, product.Colors) {
						result = append(result, product)
						break
					}
				}
			}
		}
		if queries["size"] != "" {
			array_size := strings.Split(queries["size"], ",")
			for _, product := range products {
				for _, size := range array_size {
					if stringInSlice(size, product.Size) {
						result = append(result, product)
						break
					}
				}
			}
		}
	} else {
		result = products
	}

	return result, nil
}

func (r *productRepository) Create(product Product) (*Product, error) {
	coll := r.db.Collection("products")
	res, err := coll.InsertOne(context.Background(), product)
	if err != nil {
		return nil, err
	}
	var newPost Product
	query := bson.M{"_id": res.InsertedID}
	if err := coll.FindOne(context.Background(), query).Decode(&newPost); err != nil {
		return nil, err
	}
	return &newPost, nil
}

func (r *productRepository) FindById(id string) (*Product, error) {
	coll := r.db.Collection("products")
	var product Product
	query := bson.M{"_id": id}
	if err := coll.FindOne(context.Background(), query).Decode(&product); err != nil {
		return nil, err
	}
	return &product, nil
}

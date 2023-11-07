package router

import (
	"github.com/biskitsx/kittoshop/server/handler"
	"github.com/biskitsx/kittoshop/server/repository"
	"github.com/biskitsx/kittoshop/server/service"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/mongo"
)

func NewRouter(app *fiber.App, client *mongo.Client) {
	productRepository := repository.NewProductRepository(client)
	productService := service.NewProductService(productRepository)
	productHandler := handler.NewProductHandler(productService)

	app.Get("/products", productHandler.GetAllProducts)
	app.Post("/products", productHandler.CreateProduct)
}

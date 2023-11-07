package main

import (
	"context"
	"os"

	"github.com/biskitsx/kittoshop/server/config"
	"github.com/biskitsx/kittoshop/server/router"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Podcast struct {
	Title  string `bson:"title,omitempty"`
	Author string `bson:"author,omitempty"`
	// Tags     []string `bson:"tags,omitempty"`
	// Category string   `bson:"category,omitempty"`
}

func main() {
	err := godotenv.Load()
	if err != nil {
		panic("Error loading .env file")
	}
	client := initDatabase()
	app := initServer()
	router.NewRouter(app, client)
	app.Listen(":3001")
}

func initServer() *fiber.App {
	app := fiber.New(fiber.Config{
		ErrorHandler: config.NewCustomConfigFiber,
	})
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		// AllowMethods:     strings.Split(viper.GetString("cors.allow_methods"), ","),
		// AllowHeaders:     strings.Split(viper.GetString("cors.allow_headers"), ","),
		AllowCredentials: true,
	}))
	return app
}
func initDatabase() *mongo.Client {
	MONGO_URI := os.Getenv("MONGO_URI")
	client, err := mongo.Connect(context.Background(), options.Client().ApplyURI(MONGO_URI))

	if err != nil {
		panic(err)
	}
	if err := client.Ping(context.Background(), nil); err != nil {
		panic(err)
	}

	return client
}

package handler

import (
	"github.com/biskitsx/kittoshop/server/service"
	"github.com/gofiber/fiber/v2"
)

type productHandler struct {
	productService service.ProductService
	awsService     service.AwsService
}

func NewProductHandler(productService service.ProductService) *productHandler {
	return &productHandler{
		productService: productService,
		awsService:     service.NewAwsService(),
	}
}

func (h *productHandler) CreateProduct(c *fiber.Ctx) error {
	var product service.CreateProductRequest

	if err := c.BodyParser(&product); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Cannot parse JSON",
		})
	}

	file, err := c.FormFile("picture")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Cannot parse file",
		})
	}
	result, err := h.awsService.Upload(file)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"message": "Cannot upload file",
		})
	}

	newProduct, err := h.productService.Create(product.Name, product.Price, result.Location, product.Rating, product.Colors, product.Size, product.Type)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Cannot create product",
		})
	}
	return c.JSON(fiber.Map{
		"msg":  "Create product successfully",
		"data": newProduct,
	})
}

func (h *productHandler) GetAllProducts(c *fiber.Ctx) error {
	queries := c.Queries()
	products, err := h.productService.GetAll(queries)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"message": "Cannot get products",
		})
	}

	return c.JSON(products)
}

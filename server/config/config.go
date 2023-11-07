package config

import (
	"errors"

	"github.com/gofiber/fiber/v2"
)

func NewCustomConfigFiber(c *fiber.Ctx, err error) error {
	code := fiber.StatusInternalServerError

	// Retrieve the custom status code if it's a *fiber.Error
	var e *fiber.Error
	if errors.As(err, &e) {
		code = e.Code
	}

	// Set Content-Type: text/plain; charset=utf-8
	c.Set(fiber.HeaderContentType, fiber.MIMEApplicationJSONCharsetUTF8)

	// Return status code with error message
	return c.Status(code).JSON(fiber.Map{
		"statusCode": code,
		"message":    err.Error(),
	})
}

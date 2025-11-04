package main

import (
	"log"
	"github.com/gofiber/fiber/v2"
)

func main() {
	// Create a new Fiber instance
	app := fiber.New()

	// Define a GET route for the root path
	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	println("Hello, World!")

	// Start the server on port 3000
	log.Fatal(app.Listen(":3000"))
}

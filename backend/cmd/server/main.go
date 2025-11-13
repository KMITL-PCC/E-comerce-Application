package main

import (
	"log"

	"github.com/gofiber/fiber/v2"

	"github.com/joho/godotenv"

	"e-commerce-backend/internal/config"
	"e-commerce-backend/internal/model"
)

func main() {
	//load env file
	err := godotenv.Load()
	if err != nil {
		log.Println("Error loading .env file: %v", err)
	}

	//connect to database
	db, err := config.PostgresConfig()
	
    if err != nil {
        log.Fatal("Cannot connect to database: ", err)
    }

	if err := model.MigrateAll(db); err != nil {
		log.Fatal("Could not run migrations: ", err)
	}

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

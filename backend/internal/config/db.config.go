package config

import (
	"fmt"
	"log"
	"os"
	"strconv"
	"time"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func PostgresConfig () (*gorm.DB, error) {

	host := getEnv("DB_HOST", "localhost")
	portStr := getEnv("DB_PORT", "5432")
	user := getEnv("DB_USER", "admin")
	password := getEnv("DB_PASSWORD", "12345")
	dbname := getEnv("DB_NAME", "ecommerce_db")

	// Convert port to integer
	port, err := strconv.Atoi(portStr)
	if err != nil {
		log.Fatalf("Invalid DB_PORT: %s", portStr)
	}

	//create dsn
	dsn := fmt.Sprintf("host=%s user=%s password=%s dbname=%s port=%d sslmode=disable TimeZone=UTC",
		host, user, password, dbname, port,
	)

	//connect to database
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("%s \nfailed to connect to database: %w", dsn, err)
	}

	//setting Connection Pool (performance optimization)
	sqlDB, err := db.DB()
	if err != nil {
		return nil, fmt.Errorf("failed to get underlying sql.DB: %w", err)
	}

	sqlDB.SetMaxIdleConns(10)          // จำนวน Connection ที่ "ว่าง" รอไว้
	sqlDB.SetMaxOpenConns(100)         // จำนวน Connection สูงสุด
	sqlDB.SetConnMaxLifetime(time.Hour) // อายุขัยของ Connection

	log.Println("✅ Successfully connected to PostgreSQL!")
	return db, nil
}

func getEnv(key, fallback string) string {
	if value, exists := os.LookupEnv(key); exists {
		return value
	}
	return fallback
}
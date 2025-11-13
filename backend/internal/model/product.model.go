package model

import (
	"time"

	"github.com/google/uuid"
	"gorm.io/datatypes"
)

type Product struct {
	ID          uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name        string    `gorm:"size:255;not null"`
	Description string
	CategoryID  uuid.UUID `gorm:"type:uuid"`

	CreatedAt time.Time `gorm:"default:now()"`
	UpdatedAt time.Time

	// Relationships
	Category        Category         `gorm:"foreignKey:CategoryID"`
	ProductVariants []ProductVariant `gorm:"foreignKey:ProductID"`
	ProductImages   []ProductImage   `gorm:"foreignKey:ProductID"`
}

// ProductVariant (ตาราง product_variants - สินค้าย่อย/ตัวเลือก)
type ProductVariant struct {
	ID                uuid.UUID      `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	ProductID         uuid.UUID      `gorm:"type:uuid;not null"`
	Name              string         `gorm:"size:255;not null"`
	SKU               string         `gorm:"size:100;uniqueIndex"`
	Price             float64        `gorm:"type:numeric(10, 2);not null;default:0"`
	OriginalPrice     *float64       `gorm:"type:numeric(10, 2)"`
	StockQuantity     int            `gorm:"not null;default:0"`
	Attributes        datatypes.JSON `gorm:"type:jsonb"`
	ThumbnailImageURL string

	// Relationships
	Product Product `gorm:"foreignKey:ProductID"`
}

// ProductImage (ตาราง product_images - รูปสินค้า)
type ProductImage struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	ProductID uuid.UUID `gorm:"type:uuid;not null"`
	ImageURL  string    `gorm:"not null"`
	IsPrimary bool      `gorm:"default:false"`

	// Relationships
	Product Product `gorm:"foreignKey:ProductID"`
}

// Category (ตาราง categories - หมวดหมู่)
type Category struct {
	ID               uuid.UUID  `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Name             string     `gorm:"size:100;uniqueIndex;not null"`
	ParentCategoryID *uuid.UUID `gorm:"type:uuid"` // Pointer สำหรับ self-referencing ที่เป็น null ได้

	// Relationships
	ParentCategory *Category  `gorm:"foreignKey:ParentCategoryID"`
	SubCategories  []Category `gorm:"foreignKey:ParentCategoryID"`
}


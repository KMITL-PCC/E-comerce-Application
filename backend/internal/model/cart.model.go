package model

import (
	"time"

	"github.com/google/uuid"
)

type VoucherType string
const (
	VoucherFixedAmount VoucherType = "fixed_amount"
	VoucherPercentage  VoucherType = "percentage"
)

type CartItem struct {
	ID        uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID    uuid.UUID `gorm:"type:uuid;not null;uniqueIndex:idx_user_variant"`
	Quantity  int       `gorm:"not null;default:1"`
	CreatedAt time.Time `gorm:"default:now()"`

	// ⭐️ หมายเหตุ: แก้ไขจาก product_id เป็น product_variant_id
	// เพื่อให้สอดคล้องกับ Schema V2 ที่มีตัวเลือกสินค้า
	ProductVariantID uuid.UUID `gorm:"type:uuid;not null;uniqueIndex:idx_user_variant"`

	// Relationships
	User           User           `gorm:"foreignKey:UserID"`
	ProductVariant ProductVariant `gorm:"foreignKey:ProductVariantID"`
}

// Voucher (ตาราง vouchers - คูปองส่วนลด)
type Voucher struct {
	ID            uuid.UUID   `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Code          string      `gorm:"size:50;uniqueIndex;not null"`
	VoucherType   VoucherType `gorm:"type:voucher_type;not null"`
	DiscountValue float64     `gorm:"type:numeric(10, 2);not null"`
	MinSpend      float64     `gorm:"type:numeric(10, 2);default:0"`
	MaxUses       *int
	CurrentUses   int       `gorm:"default:0"`
	ExpiresAt     *time.Time
	IsActive      bool      `gorm:"default:true"`
}
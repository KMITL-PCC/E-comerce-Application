package model

import (
	"time"

	"github.com/google/uuid"
)

type OrderStatus string
const (
	StatusPendingPayment OrderStatus = "pending_payment"
	StatusPaid           OrderStatus = "paid"
	StatusShipped        OrderStatus = "shipped"
	StatusCompleted      OrderStatus = "completed"
	StatusCancelled      OrderStatus = "cancelled"
)


type Order struct {
	ID                uuid.UUID   `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	UserID            uuid.UUID   `gorm:"type:uuid;not null;index"`
	Status            OrderStatus `gorm:"type:order_status;not null;default:'pending_payment';index"`
	Subtotal          float64     `gorm:"type:numeric(10, 2);not null"`
	DiscountAmount    float64     `gorm:"type:numeric(10, 2);default:0"`
	TotalAmount       float64     `gorm:"type:numeric(10, 2);not null"`
	PaymentGatewayRef *string
	PromptpayQRData   *string
	PaidAt            *time.Time

	CreatedAt time.Time `gorm:"default:now()"`
	UpdatedAt time.Time

	// Relationships
	User            User            `gorm:"foreignKey:UserID"`
	OrderItems      []OrderItem     `gorm:"foreignKey:OrderID"`
	AppliedVoucher *AppliedVoucher `gorm:"foreignKey:OrderID"`
}

// OrderItem (ตาราง order_items - รายการสินค้าในคำสั่งซื้อ)
type OrderItem struct {
	ID                   uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	OrderID              uuid.UUID `gorm:"type:uuid;not null"`
	ProductSnapshotName  string    `gorm:"size:255;not null"`
	ProductSnapshotPrice float64   `gorm:"type:numeric(10, 2);not null"`
	Quantity             int       `gorm:"not null"`

	// ⭐️ หมายเหตุ: แก้ไขจาก product_id เป็น product_variant_id
	// เพื่อเก็บ ID ของตัวเลือกสินค้าที่ซื้อจริง (อาจเป็น null ถ้าสินค้าย่อยถูกลบ)
	ProductVariantID *uuid.UUID `gorm:"type:uuid"`

	// Relationships
	Order          Order          `gorm:"foreignKey:OrderID"`
	ProductVariant ProductVariant `gorm:"foreignKey:ProductVariantID"`
}

// AppliedVoucher (ตาราง applied_vouchers - คูปองที่ใช้ในคำสั่งซื้อ)
type AppliedVoucher struct {
	ID                    uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	OrderID               uuid.UUID `gorm:"type:uuid;uniqueIndex;not null"`
	VoucherID             uuid.UUID `gorm:"type:uuid;not null"`
	DiscountAmountApplied float64   `gorm:"type:numeric(10, 2);not null"`

	// Relationships
	Order   Order   `gorm:"foreignKey:OrderID"`
	Voucher Voucher `gorm:"foreignKey:VoucherID"`
}
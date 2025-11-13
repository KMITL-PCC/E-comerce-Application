package model

import (
	"time"

	"github.com/google/uuid" // (แนะนำ) ใช้ UUID สำหรับ PK
	"gorm.io/gorm"
)

// (Enum) สร้าง Type สำหรับ 'user_role'
type UserRole string
const (
	RoleCustomer UserRole = "customer"
	RoleAdmin    UserRole = "admin"
)

// User คือ GORM Model สำหรับตาราง 'users'
type User struct {
	ID                   uuid.UUID `gorm:"type:uuid;primary_key;default:gen_random_uuid()"`
	Username             string    `gorm:"size:100"`
	Email                string    `gorm:"size:255;uniqueIndex;not null"`
	PasswordHash         string    `gorm:"not null"`
	Role                 UserRole  `gorm:"type:user_role;not null;default:'customer'"`
	PasswordResetToken   *string   // ใช้ pointer สำหรับ Nullable
	PasswordResetExpires *time.Time // ใช้ pointer สำหรับ Nullable

	CreatedAt time.Time `gorm:"default:now()"`
	UpdatedAt time.Time

	// Relationships
	CartItems []CartItem `gorm:"foreignKey:UserID"`
}

// (Optional) ถ้าคุณใช้ Enum, GORM ต้องรู้ว่ามันคือ Type ใน DB
// นี่คือโค้ดสำหรับสร้าง Type 'user_role' ใน PostgreSQL
// เราจะเรียกใช้มันใน main.go
func CreateUserRoleType(db *gorm.DB) error {
	// ตรวจสอบว่ามี Type นี้หรือยัง
	var exists bool
	db.Raw("SELECT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role')").Scan(&exists)
	if !exists {
		return db.Exec("CREATE TYPE user_role AS ENUM ('customer', 'admin')").Error
	}
	return nil
}
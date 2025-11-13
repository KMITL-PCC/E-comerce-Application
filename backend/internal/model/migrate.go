package model

import (
	"fmt"

	"gorm.io/gorm"
)

//create all enums used in the database
func RegisterEnums(db *gorm.DB) error {
	enums := map[string][]string{
		"user_role":     {"customer", "admin"},
		"order_status":  {"pending_payment", "paid", "shipped", "completed", "cancelled"},
		"voucher_type":  {"fixed_amount", "percentage"},
	}

	//1.create enum type to check existing types
	typeNamesToCheck := []string{}
	for typename := range enums {
		typeNamesToCheck = append(typeNamesToCheck, typename)
	}

	//2.check existing types in the database
	var existingTypeNames []string
	if err := db.Raw("SELECT typname FROM pg_type WHERE typname IN (?)", typeNamesToCheck).Scan(&existingTypeNames).Error; err != nil {
		return err
	}

	//3.create lookup array for existing types
	existingSet := make(map[string]bool)
	for _, typ := range existingTypeNames {
		existingSet[typ] = true
	}

	return db.Transaction(func(tx *gorm.DB) error {
		//4.loop for create enums if not exist
		for typeName, values := range enums {

			if !existingSet[typeName] {

				query := fmt.Sprintf("CREATE TYPE %s AS ENUM (%s)", typeName, formatEnumValues(values))
				if err := tx.Exec(query).Error; err != nil {
					return err
				}
			}

		}
		return nil
	})	
}

//helper function to format enum values for SQL
func formatEnumValues(values []string) string {
	formatted := ""
	for i, v := range values {
		formatted += fmt.Sprintf("'%s'", v)
		if i < len(values)-1 {
			formatted += ", "
		}
	}
	return formatted
}

// MigrateAll performs auto-migration for all models
func MigrateAll(db *gorm.DB) error {
	// 1. สร้าง Enum Types ก่อน
	if err := RegisterEnums(db); err != nil {
		return err
	}
	
	// 2. รัน AutoMigrate โดยอ้างอิง Structs จากทุกไฟล์
	return db.AutoMigrate(
		&User{},
		&Category{},
		&Product{},
		&ProductVariant{},
		&ProductImage{},
		&CartItem{},
		&Voucher{},
		&Order{},
		&OrderItem{},
		&AppliedVoucher{},
	)
}
package models

import "time"

type User struct {
	ID       int    `json:"id"`
	Email    string `json:"email" gorm:"type: varchar(255)"`
	Password string `json:"-" gorm:"type: varchar(255)"`
	FullName string `json:"fullname" gorm:"type: varchar(255)"`
	Gender   string `json:"gender" gorm:"type: varchar(255)"`
	Phone    string `json:"phone" gorm:"type: varchar(255)"`
	Address  string `json:"address" gorm:"type: varchar(255)"`
	// Role     string `json:"role" gorm:"type: varchar(255)"`

	// Profile ProfileResponse `json:"profile"`
	// Literaturs LiteraturUserResponse `json:"literatur"`

	Literaturs []LiteraturUserResponse `json:"literatur"`
	CreatedAt  time.Time               `json:"-"`
	UpdatedAt  time.Time               `json:"-"`
}

type UsersProfileResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"fullname"`
	Email    string `json:"email"`
	Gender   string `json:"gender"`
	Phone    string `json:"phone"`
	Address  string `json:"address"`
	// Role     string `json:"role"`

	// Profile ProfileResponse `json:"profile"`
}

func (UsersProfileResponse) TableName() string {
	return "users"
}

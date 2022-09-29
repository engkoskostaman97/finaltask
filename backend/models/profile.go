package models

import "time"

type Profile struct {
	ID int `json:"id" gorm:"primary_key:auto_increment"`
	// UserID int `json:"user_id"`
	// User    UsersProfileResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`

	Phone   string `json:"phone" gorm:"type: varchar(255)"`
	Gender  string `json:"gender" gorm:"type: varchar(255)"`
	Address string `json:"address" gorm:"type: text"`

	// LiteraturID int                  `json:"literatur_id"`
	// Literatur   LiteraturResponse    `json:"literatur"`

	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}

// for association relation with another table (user)
type ProfileResponse struct {
	UserID  int    `json:"-"`
	Phone   string `json:"phone"`
	Gender  string `json:"gender`
	Address string `json:"address"`
}

func (ProfileResponse) TableName() string {
	return "profiles"
}

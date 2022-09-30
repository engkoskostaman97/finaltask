package authdto

type LoginResponse struct {
	FullName string `gorm:"type: varchar(255)" json:"fullname"`
	Email    string `gorm:"type: varchar(255)" json:"email"`
	Gender   string `gorm:"type: varchar(255)" json:"gender"`
	Phone    string `gorm:"type: varchar(255)" json:"phone"`
	Address  string `gorm:"type: varchar(255)" json:"address"`
	UserID   int    `json:"user_id"`

	// Role     string `gorm:"type: varchar(255)" json:"role"`
	Password string `gorm:"type: varchar(255)" json:"password"`
	Token    string `gorm:"type: varchar(255)" json:"token"`
}

// type CheckAuthResponse struct {
// 	Id       int    `gorm:"type: int" json:"id"`
// 	FullName string `gorm:"type: varchar(255)" json:"fullname"`
// 	Email    string `gorm:"type: varchar(255)" json:"email"`
// 	// Role     string `gorm:"type: varchar(255)" json:"role" `
// 	Token string `gorm:"type: varchar(255)" json:"token"`
// }

package repositories

import (
	"literatur/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	FindUsers() ([]models.User, error)
	GetUser(ID int) (models.User, error)
	CreateUser(user models.User) (models.User, error)
	UpdateUser(user models.User) (models.User, error)
	DeleteUser(user models.User) (models.User, error)
}

func RepositoryUser(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindUsers() ([]models.User, error) {
	var users []models.User
	err := r.db.
		Preload("Literaturs").
		Preload("Collections").
		Preload("Collections.Literatur").
		Preload("Collections.Literatur.User").
		Preload("Collections.User").
		Find(&users).Error

	return users, err
}

func (r *repository) GetUser(ID int) (models.User, error) {
	var user models.User
	err := r.db.
		Preload("Literaturs").
		Preload("Collections").
		Preload("Collections.Literatur").
		Preload("Collections.User").
		Preload("Collections.Literatur.User").First(&user, ID).Error

	return user, err
}

func (r *repository) CreateUser(user models.User) (models.User, error) {
	err := r.db.Create(&user).Error

	return user, err
}

func (r *repository) UpdateUser(user models.User) (models.User, error) {
	err := r.db.Save(&user).Error

	return user, err
}

func (r *repository) DeleteUser(user models.User) (models.User, error) {
	// Using "Delete" method here ...
	err := r.db.Delete(&user).Error
	// if errors.Is(err, gorm.ErrRecordNotFound) {
	// 	fmt.Println("Data tidak ditemukan")
	//   }

	return user, err
}

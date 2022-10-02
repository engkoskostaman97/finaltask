package collectiondto

type CreateCollection struct {
	ID          int `json:"id"`
	UserID      int `json:"user_id"`
	LiteraturID int `json:"literatur_id"`
}

type UpdateCollection struct {
	ID int `json:"id"`
}

type CollectionResponse struct {
	ID int `json:"id"`
}

// type CollectionRequest struct {
// 	LiteraturID     int
// 	Title           string `json:"title" form:"title" gorm:"type: varchar(255)" validate:"required"`
// 	PublicationDate string `json:"publicationdate" form:"publicationdate" gorm:"type: varchar(255)" validate:"required"`
// 	Pages           string `json:"pages" form:"pages" gorm:"type: varchar(255)" validate:"required"`
// 	ISBN            string `json:"isbn" form:"isbn" gorm:"type: varchar(255)" validate:"required"`
// 	Author          string `json:"author" form:"author" gorm:"type: varchar(255)" validate:"required"`
// 	Attache         string `json:"attache" form:"attache" gorm:"type: varchar(255)"`
// }

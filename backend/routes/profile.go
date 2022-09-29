package routes

import (
	"literatur/handlers"
	"literatur/pkg/mysql"
	"literatur/repositories"

	"github.com/gorilla/mux"
)

func ProfileRoutes(r *mux.Router) {
	profileRepository := repositories.RepositoryProfile(mysql.DB)
	h := handlers.HandlerProfile(profileRepository)

	r.HandleFunc("/profiles/{id}", h.GetProfile).Methods("GET")
	r.HandleFunc("/profiles/{id}/literatur", h.GetProfile).Methods("GET")

}

Rails.application.routes.draw do

  root 'home#index'

  resources :songs, only: [:create]

end

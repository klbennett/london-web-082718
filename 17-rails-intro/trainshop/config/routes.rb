Rails.application.routes.draw do
  resources :trains, only: [:index, :show]
end

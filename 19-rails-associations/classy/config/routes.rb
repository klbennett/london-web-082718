Rails.application.routes.draw do
  resources :another_kind_of_alcohols
  get 'beer/name'

  resources :wines
  resources :cheeses
  resources :regions
end

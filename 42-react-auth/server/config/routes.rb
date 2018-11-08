Rails.application.routes.draw do
  post 'signin', to: 'users#sign_in'
  get 'validate', to: 'users#validate'
  get 'items', to: 'users#get_items'
end

Rails.application.routes.draw do
  resources :users, only: [:create]
  scope '/api/v1' do
    resources :trademarks
  end
end

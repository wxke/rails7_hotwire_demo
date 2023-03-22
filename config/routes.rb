Rails.application.routes.draw do
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  resources :home, only: [:index, :new] do
    collection do
      get :messages
      post :stream
    end
  end

  resources :stimulus, only: [:index]
end

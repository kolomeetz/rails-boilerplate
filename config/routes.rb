Rails.application.routes.draw do
  # For details on the DSL available within this file,
  # see http://guides.rubyonrails.org/routing.html

  root 'root#index'

  # Lowest priority: React SPA catcher.
  get '*path', to: 'root#index', constraints: -> (request) do
    !request.xhr? && request.format.html?
  end
end

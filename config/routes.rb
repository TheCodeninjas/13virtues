Virtues13::Application.routes.draw do
  root :to => "sessions#login"
  match "signup", :to => "users#new"
  match "login", :to => "sessions#login"
  match "logout", :to => "sessions#logout"
  match "home", :to => "sessions#home"
  match "profile", :to => "sessions#profile"
  match "setting", :to => "sessions#setting"
  resources :users
  resources :classrooms do
    resources :virtueentries do
      get 'editall/:date',  :action => 'editall',  :as =>  'editall', :on  =>  :collection
    end
    resources :statistics do
      get 'entries_on/:user', :action=>'entries_on', :as=>'entries_on', :on =>:collection
    end
    collection do
      post 'register'
    end
  end

  resources :sessions
  root :to => redirect('/sessions')
  get 'signout' => 'sessions#destroy'

  # route to delete all entries for a user in a particular class
  delete '/classrooms/:classroom_id/virtueentries/' => "virtueentries#destroy", as: 'classroom_virtueentries'

end

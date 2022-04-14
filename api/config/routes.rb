Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # api コントローラに対してのルーティングを記述している?
  namespace :api do
    # たぶん
    # 「IPアドレスuser/porfile」にgetでアクセスしたら， userコントローラ(users_Controller.rb)のprofileメソッドを実行
    # 「Ipアドレス/api/user/profile」にアクセスしたら，users#profile が取れた」 なぜ，api がつく必要あるのかは謎だけど..
    get "user/profile", to: "users#profile"
  end
end

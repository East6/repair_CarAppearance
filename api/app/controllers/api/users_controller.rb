class Api::UsersController < Api::Base
  # ユーザの情報を返すコントローラ
  def profile
    # json形式で情報を返す + statuscode200 のつもり
    render json: {profile:{userall:User.all}} , status:200
  end
end
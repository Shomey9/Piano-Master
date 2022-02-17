class UsersController < ApplicationController
    def index 
        render json: User.all 
    end
    def show
        if current_user
          render json: current_user, status: :ok
        else
          render json: "No current session stored", status: :unauthorized
        end
    end
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    private
    def user_params
      params.permit(:username, :password)
    end
end

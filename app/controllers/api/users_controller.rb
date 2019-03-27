class Api::UsersController < ApplicationController

    def index
        @users = User.all 
    end

    def show
        @user = User.find_by(params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.username == "Username" ||
           @user.email == "Email" ||
           @user.password == "Password"
           render json: ["Invalid credentials"], status: 422
        elsif @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end
end

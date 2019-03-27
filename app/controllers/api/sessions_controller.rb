class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.username == "Username" ||
           @user.email == "Email" ||
           @user.password == "Password"
           render json: ["Invalid credentials"]
        elsif @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destroy
        @user = current_user
        if @user 
            logout!
            render "api/users/show"
        else
            render json: ["No user signed in"], status: 404
        end
    end
end
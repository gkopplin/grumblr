class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user.save
            render "api/users/show"
        else
            render json: ["Invalid credentials"], status: 401
        end
    end

    def destory
        @user = current_user
        if @user 
            logout!
            render "api/users/show"
        else
            render json: ["No user signed in"], status: 404
        end
    end
end
class Api::UsersController < ApplicationController

    def index
        if params[:search] != "" && params[:search].nil? == false
            @users = User.where("username ILIKE ?", "%#{params[:search]}%")
        elsif params[:followers] == "true"
            follows = Follow.where('followed_id = ?', current_user.id)
            ids = follows.map{|follow| follow.follower_id}
            @users = User.where('id IN (?)', ids)
        else
            follows = Follow.where('follower_id = ?', current_user.id)
            ids = follows.map{|follow| follow.followed_id}
            @users = User.where('id IN (?)', ids)
        end
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render "api/users/show"
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password, :profile_pic)
    end
end

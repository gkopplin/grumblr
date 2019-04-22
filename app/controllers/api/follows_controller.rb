class Api::FollowsController < ApplicationController
    def index
        if params[:followers] == "true"
            @users = [User.includes(:followers).find(params[:userId])]
        else
            @users = User.includes(:followed_users).find(params[:userId]).followed_users
        end
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            @users = [User.includes(:followers).find(params[:follow][:followed_id])]

            render 'api/follows/index'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.where('follower_id = :current_user AND followed_id = :followed', current_user: current_user.id, followed: params[:followed_id])[0]
        @follow.destroy
        render json: current_user.id
    end

    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end
end
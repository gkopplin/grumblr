class Api::FollowsController < ApplicationController
    def index
        follows = Follow.where(followed_id: params[:userId])
        @followers = []
        follows.each do |follow|
            @followers << follow.follower_id
        end
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save
            follows = Follow.where(followed_id: params[:follow][:followed_id])
            @followers = []
            follows.each do |follow|
                @followers << follow.follower_id
            end

            render 'api/follows/index'
            # redirect_to :index
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end
end
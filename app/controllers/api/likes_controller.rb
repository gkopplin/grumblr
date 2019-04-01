class Api::LikesController < ApplicationController
    
    def create
        @like = Like.new(like_params)
        @post = Post.find(@like.post_id)
        if @like.save
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        @like = Like.find(params[:like_id])
        @post = Post.find(@like.post_id)
        @like.destroy
        render 'api/likes/show'
    end

    private

    def like_params
        params.require(:like).permit(:user_id, :post_id)
    end
    
end
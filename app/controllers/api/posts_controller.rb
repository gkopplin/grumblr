class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        
        if @post.save
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        @post.destroy

        @posts = Post.all
        render json: 'api/posts'
        # ask adam
    end

    def index
        # ask adam
        @posts = Post.all 
        render json: 'api/posts'
    end

    #show?

    private

    def post_params
        params.require(:post).permit(:content, :post_type, :author_id)
    end
end
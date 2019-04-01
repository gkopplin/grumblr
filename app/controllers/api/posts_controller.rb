class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.save
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def update
        @post = Post.find_by(id: params[:id])
        if @post.update(post_params)
            render 'api/posts/show'
        else
            render json: @post.errors.full_messages, status: 422
        end
    end

    def destroy
        @post = Post.find_by(id: params[:id])
        if @post 
            @post.destroy
            render 'api/posts/show'
        else
            render json: ["Post not found"], status: 404
        end
    end

    def index
        @posts = Post.all
        @users = User.all

        if params[:search]
            @users = User.where("username ILIKE ?", "%#{params[:search]}%")
            ids = @users.map {|user| user.id}
            @posts = Post.where('author_id IN (?)', ids)

        elsif params[:page] == "profile" 
            @posts = Post.where(posts: {author_id: params[:userId]})
            @users = User.where(id: params[:userId])
        end

        render :index
    end

    private

    def post_params
        params.require(:post).permit(:content, :post_type, :author_id)
    end
end
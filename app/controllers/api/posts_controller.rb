class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.post_type != "text" && @post.media.attached? == false
            render json: ["No photo/video selected"], status: 422
        elsif @post.save
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
        if params[:search]
            @users = User.where("username ILIKE ?", "%#{params[:search]}%")
            ids = @users.map {|user| user.id}
            @posts = Post.with_attached_media.where('author_id IN (?)', ids)

        elsif params[:page] == "profile" 
            @posts = Post.with_attached_media.where(posts: {author_id: params[:userId]})
            @users = User.where(id: params[:userId])
        elsif params[:page] == "likes"  
            likes = Like.where("user_id = ?", current_user.id)
            post_ids = likes.map {|like| like.post_id}
            @posts = Post.with_attached_media.where('id IN (?)', post_ids)
            user_ids = @posts.map {|post| post.author_id}
            @users = User.where('id IN (?)', user_ids)
        else
            @posts = Post.with_attached_media.all
            @users = User.all
        end
    end

    private

    def post_params
        params.require(:post).permit(:content, :post_type, :author_id, :media)
    end
end
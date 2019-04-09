class Api::PostsController < ApplicationController
    def create
        @post = Post.new(post_params)
        if @post.post_type != "text" && @post.post_type != "link" &&
             @post.media.attached? == false
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
        if params[:search] == true
            @users = User.where("username ILIKE ?", "%#{params[:search]}%")
            ids = @users.map {|user| user.id}
            @posts = Post.with_attached_media.where('author_id IN (?)', ids)

        elsif params[:splash] == true
            @posts = [Post.with_attached_media.first]
            @users = User.where("id = ?", @posts[0].author_id)

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
            follows = Follow.where("follower_id = ?", current_user.id)
            follow_ids = follows.map{|follow| follow.followed_id}
            follow_ids << current_user.id
            @users = User.where('id IN (?)', follow_ids)
            user_ids = @users.map{|user| user.id}
            @posts = Post.with_attached_media.where('author_id IN (?)', user_ids)
        end
    end

    private

    def post_params
        params.require(:post).permit(:content, :post_type, :author_id, :media)
    end
end
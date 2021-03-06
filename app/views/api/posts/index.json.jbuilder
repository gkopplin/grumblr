json.posts do
  @posts.each do |post|
    json.set! post.id do
      json.partial! 'api/posts/post', post: post
    end
  end
end

json.authors do 
 @posts.each do |post|
    json.set! post.author_id do
      json.partial! "api/users/user", user: @users.find(post.author_id)
    end
  end
end

json.likes do 
  @posts.each do |post|
    post.likes.each do |like|
      json.set! like.id do 
        json.partial! "api/likes/like", like: like
      end
    end
  end
end








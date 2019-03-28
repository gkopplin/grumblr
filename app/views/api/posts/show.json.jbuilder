json.partial! "api/posts/post", post: @post
json.partial! "api/users/user", user: @post.author_id
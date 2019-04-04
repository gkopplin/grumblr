json.extract! post, :id, :content, :post_type, :author_id, :updated_at
if post.post_type != "text"
    json.content url_for(post.media)
end
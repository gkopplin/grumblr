json.extract! post, :id, :content, :post_type, :author_id, :updated_at
if post.post_type == "photo"
    json.imageUrl url_for(post.photo)
end
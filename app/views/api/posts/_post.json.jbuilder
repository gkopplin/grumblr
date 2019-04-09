json.extract! post, :id, :content, :post_type, :author_id, :updated_at
if post.post_type != "text" && post.post_type != "link"
    json.content url_for(post.media)
end
class Post < ApplicationRecord
    validates :content, :post_type, presence: true

    belongs_to :author,
        class_name: "User",
        foreign_key: "author_id"
end
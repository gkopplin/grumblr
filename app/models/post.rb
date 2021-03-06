class Post < ApplicationRecord
    validates :content, :post_type, presence: true

    belongs_to :author,
        class_name: "User",
        foreign_key: "author_id"

    has_many :likes,
        class_name: :Like,
        foreign_key: :post_id

    has_one_attached :media
end
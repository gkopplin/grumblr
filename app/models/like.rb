class Like < ApplicationRecord
    validates :post_id, :user_id, presence: true

    belongs_to :post,
        class_name: :Post,
        foreign_key: :post_id

    belongs_to :user,
        class_name: :User,
        foreign_key: :user_id
end
class Follow < ApplicationRecord 
    validates :follower_id, :followed_id, presence: true
    validates_uniqueness_of :followed_id, :scope => :follower_id

    belongs_to :followers,
        class_name: :User,
        foreign_key: :follower_id

    belongs_to :followed_users,
        class_name: :User,
        foreign_key: :followed_id
end
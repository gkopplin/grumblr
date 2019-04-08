class User < ApplicationRecord
    validates :username, :email, :session_token, uniqueness: true
    validates :username, :email, :session_token, :password_digest, presence: true 

    has_many :authored_posts,
        class_name: "Post",
        foreign_key: "author_id"

    has_many :follower_joins,
        class_name: :Follow,
        foreign_key: :followed_id

    has_many :followed_joins,
        class_name: :Follow,
        foreign_key: :follower_id

    has_many :followers,
        through: :follower_joins,
        source: :followers

    has_many :followed_users,
        through: :followed_joins,
        source: :followed_users

    has_many :likes,
        class_name: :Like,
        foreign_key: :user_id
        
    has_one_attached :profile_pic    

    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_token!
        generate_session_token
        save!
        self.session_token
    end

    private

    def ensure_session_token
        generate_session_token unless self.session_token
    end

    def new_session_token
        SecureRandom.urlsafe_base64
    end

    def generate_session_token
        self.session_token = new_session_token
        while User.find_by(session_token: self.session_token)
        self.session_token = new_session_token
        end
        self.session_token
    end
end
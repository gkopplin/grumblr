# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Follow.destroy_all

user_one = User.create!({username: 'Demo User', email: 'demo_user@demo_email.com', password: 'demo_password'})
user_two = User.create!({username: 'Seed Data User', email: 'seed@seed_email.com', password: 'seed_password'})
user_three = User.create!({username: 'Seed Data User Two', email: 'seed2@seed_email.com', password: 'seed_password2'})
Post.create!([{post_type: 'text', content: 'post number one', author_id: user_two.id},
              {post_type: 'text', content: 'post number two', author_id: user_two.id} ])
Follow.create!([{follower_id: user_one.id, followed_id: user_two.id},
                {follower_id: user_three.id, followed_id: user_two.id}])
    
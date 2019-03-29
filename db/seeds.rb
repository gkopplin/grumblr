# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Post.delete_all

user_one = User.create!({username: 'Demo User', email: 'demo_user@demo_email.com', password: 'demo_password'})
user_two = User.create!({username: 'Seed Data User', email: 'seed@seed_email.com', password: 'seed_password'})
Post.create!([{post_type: 'text', content: 'post number one', author_id: user_two.id},
              {post_type: 'text', content: 'post number two', author_id: user_two.id} ])
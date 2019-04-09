# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all
Follow.destroy_all
Like.destroy_all

user_one = User.create!({username: 'Demo User', email: 'demo_user@demo_email.com', password: 'demo_password'})
user_two = User.create!({username: 'everything_is_lame', email: 'seed@seed_email.com', password: 'seed_password'})
user_three = User.create!({username: 'grumpy_gramps', email: 'seed2@seed_email.com', password: 'seed_password2'})
user_four= User.create!({username: 'get_off_my_lawn', email: 'seed3@seed_email.com', password: 'seed_password3'})
user_five = User.create!({username: 'clint_eastwood_fan419', email: 'seed4@seed_email.com', password: 'seed_password4'})

profile_pic_one = open("https://s3.amazonaws.com/grumblr-seeds/monkey.jpg")
profile_pic_two = open("https://s3.amazonaws.com/grumblr-seeds/Grumpy_Hot-Dog_Batman.jpg")
profile_pic_three = open("https://s3.amazonaws.com/grumblr-seeds/grandpa.png")
profile_pic_four = open("https://s3.amazonaws.com/grumblr-seeds/owl.jpg")

user_one.profile_pic.attach(io: profile_pic_one, filename: 'monkey.jpg')
user_two.profile_pic.attach(io: profile_pic_two, filename: 'hotdog.jpg')
user_three.profile_pic.attach(io: profile_pic_three, filename: 'grandpa.jpg')
user_four.profile_pic.attach(io: profile_pic_four, filename: 'owl.jpg')


Post.create!({post_type: 'text', content: 'kids these days', author_id: user_three.id})
post_two = Post.create!({post_type: 'text', content: 'meh', author_id: user_two.id})
post_three = Post.create!({post_type: 'photo', content: 'default', author_id: user_two.id})
photo = open("https://s3.amazonaws.com/grumblr-seeds/dog.jpg")
post_three.media.attach(io: photo, filename: 'dog.jpg')
post_four = Post.create!({post_type: 'photo', content: 'default', author_id: user_two.id})
wack = open("https://s3.amazonaws.com/grumblr-seeds/wack.jpg")
post_four.media.attach(io: wack, filename: 'wack.jpg')
post_two = Post.create!({post_type: 'text', content: ':/', author_id: user_two.id})
Post.create!({post_type: 'text', content: 'bah humbug', author_id: user_two.id})
video = open("https://s3.amazonaws.com/grumblr-seeds/Video.MOV")
post_five = Post.create!({post_type: 'video', content: 'default', author_id: user_one.id})
post_five.media.attach(io: video, filename: 'video.mov')
Post.create!({post_type: 'text', content: 'cell phone bad', author_id: user_four.id})
Post.create!({post_type: 'text', content: 'maybe if the youths turned down their music, they could think more clearly', author_id: user_five.id})



Follow.create!([{follower_id: user_one.id, followed_id: user_two.id},
                {follower_id: user_three.id, followed_id: user_two.id},
                {follower_id: user_three.id, followed_id: user_one.id},
                {follower_id: user_one.id, followed_id: user_four.id}])

Like.create!({user_id: user_two.id, post_id: post_two.id})
Like.create!({user_id: user_one.id, post_id: post_two.id})
    
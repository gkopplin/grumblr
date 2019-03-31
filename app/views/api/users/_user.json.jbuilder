json.extract! user, :id, :username, :email
json.profilePic url_for(user.profile_pic)
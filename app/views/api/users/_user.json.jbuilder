json.extract! user, :id, :username, :email
if user.profile_pic.attached?
    json.profilePic url_for(user.profile_pic)
end
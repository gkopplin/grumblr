if @users
    @users.each do |user|
        follower_ids = []
        if user.followers 
            user.followers.each do |follower|
                follower_ids << follower.id
            end
        end

        json.set! user.id do 
            json.array! follower_ids
        end
    end
end
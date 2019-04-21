# Grumblr

![screen_shot](https://github.com/gkopplin/grumblr/tree/master/app/assets/images/screenshot.png)

### Table of Contents
[Backgound](#background)

[Functionality and MVPs](#functionality)

[Architecture and Technologies](#architecture)

[Bonus Features](#bonus)

### <a name="background"></a> Background
Grumbler is a full-stack clone of Tumbler for grumpy people. It features user authentication (built using only using the BCrypt gem), posts, likes, and follows. There are pages for profiles with all of a user's posts, a dashboard with posts from followed users ordered by recency, a page listing other users who follow the current user and a page listing users that the current user follows. On each page, users can search for other users using the search bar in the header.

### <a name="functionality"></a> Functionality and MVPs

## 1. Hosting on Heroku (3/26/19)
## 2. Authentication (3/27/19, 2 days)
* Registration for new users
* Log in for existing users
* Logging in allows users to like and comment on others' posts and to create, edit, and delete their own posts (functionality built out later)
* Build splash page
## 3. Posts (3/29/19, 2 days)
* When logged in, users can create, edit, and delete their own posts
## 4. Follows (3/30/19, 1 day)
* When logged in, users' dashboard will contain a feed of posts (ordered by recency) of users they follow
* Headers on profile pages will display a follow/unfollow button depending on whether the current user follows them
* The following page will display all users that the current user follows (with unfollow buttons) and the followers will display the current user's followers
## 5. Dashboard and Profile (4/2/19, 3 days)
* Each user will have a profile listing all of their posts
* Dashboard displays profile pictures
## 6. Likes (4/3/19, 1 day)
* When logged in, users can like posts
* The like count is displayed for each post
## 7. Search (4/4/19, 1 day)
* Users can follow other users
## 8. Production Read Me (4/5/19, 0.5 days)

### <a name="architecture"></a> Architecture and Technologies
Grumblr will be implemented with the following technologies:

- `PostgreSQL` for the database
- `BCrypt` for encrypting password
- `Rails` for structuring the backend
- `React` for rendering frontend components
- `Redux` for structuring the frontend
- `AWS S3` for storing media remotely
- `jQuery` for making AJAX requests to the backend
- `JBuilder` for formatting JSON responses to send back to the frontend

The PostgreSQL database contains tables for users, posts, likes, and follows. The likes joins table connects liked posts and the users who like them. The follows joins table connects followers and the users they follow. Users have profile pictures attached with Active Storage blobs and posts have media attached. Controllers render JSON objects structured with JBuilder, and passes them to the frontend. 

The top-level React components are for the header, the splash page, the sign-up/log-in form, post create/edit forms, followers/following pages, profiles, the dashboard, and modals. A single modal React component calls on components such as dropdowns and the post create/edit forms renders them in front of all other components currently visible. Each component fetches needed data from the backend with AJAX requests. 

### <a name="bonus"> </a> Bonus features
- Allow users to direct message one another
- Allow users to share posts with one another

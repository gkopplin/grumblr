# Grumblr

![screen_shot](https://github.com/gkopplin/grumblr/blob/master/app/assets/images/screenshot.png)

### Table of Contents
[Backgound](#background)

[Features](#featuers)

[MVPs](#mvps)

[Architecture and Technologies](#architecture)

[Bonus Features](#bonus)

### <a name="background"></a> Background
Grumbler is a full-stack clone of Tumbler for grumpy people. It features user authentication (built using only using the BCrypt gem), posts, likes, and follows. There are pages for profiles with all of a user's posts, a dashboard with posts from followed users ordered by recency, a page listing other users who follow the current user and a page listing users that the current user follows. On each page, users can search for other users using the search bar in the header.

### <a name="features"></a> Features
The following are notable features of Grumbler. A more comprehensive description of the functionality of the application is below. 

## 1. Splash Page
The welcome page of Grumblr features a sliding carousel of pages, which rotates as the user scrolls or clicks the scroll icons. DOM event listeners change the classes of HTML elements when the user scrolls or clicks an icon. The updated classes contain keyframes animations which cause certain elements to slide or fade depending on the current position of the carousel and the direction of the scroll.

For instance, if the user were viewing the second splash page and scrolled back up to the first, the direction key in the splash React component state would be changed to "up2-1" and the props of the individual splash pages would be updated accordingly. Within each splash page, the root HTML element is set to `props.direction`. The CSS class for up2-1 contains a keyframes animation with a translateY transformation from -100% to 0%. 

When the user scrolls, it causes a series of scroll events (i.e. from 10 to 9, then 9 to 8, etc.) as opposed to a single click event. In order to avoid triggering multiple splash page scrolls when the user scrolls once, the helper function that updates the splash component's state is only invoked for the first scroll event. Since a series of scroll events can last up to a second, a variable named `scrollStop` is set to false on the initial scroll event and reset to true after 1000 milliseconds have passed.

```
if (this.scrollStop === true){
    this.scrollHelper(e, newPos);
    setTimeout(this.setScrollStop, 1000);
}

this.scrollStop = false;
```


## 2. Search
In the header of each page (except the splash page), there is a search bar which users can use to find users. When the user types into the search bar and adds characters to the search form element, a modal component is opened which contains search results. For each character added to the form, relevant users are fetched from the backend and the search results are re-rendered. Users can then click users to redirect to their profile page, or press enter to redirect to the first user listed in the search results.

Below is the function that is run each time the user types into the search bar. The object passed to the `openModal` function is first saved to the Redux store under the UI slice of state and then passed as props to the search results component.

```
handleInput(e) {
    this.setState({search: e.target.value});
    if (e.target.value) {
        this.props.fetchSearchResults(e.target.value);
        this.props.openModal("search-results", {users: this.state.users, 
        page: this.props.page, clearSearch: this.clearSearch});
    }
}
```

## 3. Follows
The follows joins table links followers with the users they follow. In order to limit the current user's dashboard to posts from users they follow, AJAX requests are sent to the backend and the follows joins table is queried. Similarly, the association between users and their followers is used to populate the followers and following pages with the correct users.

This code snippet from the follows controller illustrates how the boolean `followers` was used to specify the data require by the frontend components.

```
def index
    if params[:followers] == "true"
        @users = [User.includes(:followers).find(params[:userId])]
    else
        @users = User.includes(:followed_users).find(params[:userId]).followed_users
    end
end
```

### <a name="mvps"></a> MVPs

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

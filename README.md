# MusicFriends-APP
# A Social Networking/Friendship App based on Spotify API

MusicFriends is a web application that allows users to connect, network, and potentially meet others with similar music tastes. Users can discover new music, create playlists, and find meaningful connections, with other users, based on their favorite artists and genres.

## Features

- **User Authentication**: Secure user authentication system using OAuth 2.0 with Spotify.
- **Profile**: Users can create profiles with their Spotify accounts, including profile pictures, country, and favorite artists.
- **Friend Networking**: Users can connect with others based on shared music interests and preferences.
- **Chat**: Real-time chat functionality for users to communicate with their friends.
- **Friend Requests**: Send and receive friend requests to connect with other users.
- **Activity Feed**: Stay updated with your friends' recent activities, such as songs listened to and playlists created.
- **Music Recommendations**: Users can recommend songs and playlists to their friends.
- **Events**: Discover upcoming music events and concerts that you and your friends are interested in.
- **Groups**: Join or create groups based on shared music interests and genres.

## Technologies Used

- React.js: Frontend framework for building user interfaces.
- Node.js: Backend runtime environment for running JavaScript on the server.
- Express.js: Web application framework for Node.js.
- Spotify API: Integration with Spotify for user authentication and music data.
- Material-UI: React UI framework for designing consistent and responsive user interfaces.

## MOCKUP design
![mockup MusicFriends](https://github.com/SpotifyFriends/SpotifyFriends-APP/assets/118024726/bee4b753-a07d-47ad-ad0b-f937c84504bc)

## Diagram Table
![Diagrama MusicFriends](https://github.com/SpotifyFriends/SpotifyFriends-APP/assets/118024726/6d731c70-b830-48e6-beb7-e4b1f4836678)



## Endpoints:

Here's how the table for the endpoints related to the **artist** management:

| METHOD | ENDPOINT          | TOKEN | ROLE   | DESCRIPTION                   | POST PARAMS                       | RETURNS                            |
|--------|-------------------|-------|--------|-------------------------------|-----------------------------------|------------------------------------|
| GET    | /artists          | Yes   | -      | Fetch all artists             | -                                 | Array of artists                   |
| GET    | /artists/:id      | Yes   | -      | Fetch artist by ID            | -                                 | Artist details                     |
| POST   | /artists/addArtist| Yes   | Admin  | Add a new artist              | name, genre, bio, etc.            | { message: "Artist added", artist: { details } } |

### Explanation of the Table Fields

- **METHOD**: The HTTP method used for the API request.
- **ENDPOINT**: The URL path that the client will access to make the request.
- **TOKEN**: Indicates if a token (such as an authentication token) is required to access the endpoint. "Yes" means it's needed, which is common for actions that require user verification.
- **ROLE**: Specifies if the endpoint is restricted to users with specific roles (e.g., admin). If blank, it suggests the endpoint is more generally accessible.
- **DESCRIPTION**: A brief summary of what the endpoint does.
- **POST PARAMS**: For POST requests, this field details the parameters that need to be included in the body of the request. In the case of GET requests, this is typically left as '-' since they should not include a body.
- **RETURNS**: Describes what the client can expect as a response from the server after the request is processed.

This table layout will help you or any developer working with your API to quickly understand the capabilities of your artist management endpoints and how to interact with them. Adjust the specifics of the TOKEN and ROLE columns based on your actual authentication and authorization setup.

Below is the table formatted to outline the endpoints for **genre** management based on the routing setup:

| METHOD | ENDPOINT            | TOKEN | ROLE   | DESCRIPTION                          | POST PARAMS                              | RETURNS                                  |
|--------|---------------------|-------|--------|--------------------------------------|------------------------------------------|------------------------------------------|
| GET    | /genres             | Yes   | -      | Fetch all genres                     | -                                        | Array of genres                          |
| GET    | /genres/:id         | Yes   | -      | Fetch a single genre by ID           | -                                        | Genre details                            |
| POST   | /genres/addGenre    | Yes   | Admin  | Add a new genre                      | name, description                        | { message: "Genre added", genre: { details } } |
| GET    | /genres/genres/:id  | Yes   | -      | Fetch all genres associated with a user | -                                    | Array of genres associated with a user   |

### Detailed Explanation

- **METHOD**: Indicates the HTTP method used for the request (GET, POST, etc.).
- **ENDPOINT**: Describes the specific API endpoint path.
- **TOKEN**: Specifies whether an authentication token is required to access the endpoint. "Yes" is typical for actions that involve data manipulation or accessing sensitive data.
- **ROLE**: If a specific user role is necessary to access the endpoint (e.g., "Admin" for adding new genres), it is listed here.
- **DESCRIPTION**: Provides a brief explanation of the endpoint's purpose.
- **POST PARAMS**: Lists the parameters required in the POST request's body. For GET requests, this is not applicable and is represented by "-".
- **RETURNS**: Describes the expected response format and content returned by the server.

### Notes
- The routes you've defined suggest that authentication might be required, hence the "Yes" under TOKEN. Adjust this based on your actual authentication setup.
- The "ROLE" field has "Admin" for adding a new genre, which implies that only administrators can perform this action. Update this field based on your user authorization logic.
- The `/genres/genres/:id` might be a misnomer or typo unless intended to differentiate from another endpoint. It seems to imply fetching genres associated with a specific user, possibly needing clarification or adjustment in naming for better API design clarity.

This table format is useful for documentation purposes, providing developers and users with clear guidelines on how to interact with your API effectively.

Below is a formatted table that outlines the routing setup for the different sections of our web application, based on the routing setup. This table describes the general structure and purpose of each routing module without specific endpoint details, which would be found in each respective router file.

| ROUTE BASE   | LINKED ROUTER FILE | DESCRIPTION                        |
|--------------|--------------------|------------------------------------|
| /user        | `./user.router`    | Routes handling user-specific operations such as authentication, user profile management, and user settings. |
| /genre       | `./genre.router`   | Routes dedicated to genre-related functionalities including listing genres, adding new genres, and retrieving genre details. |
| /track       | `./track.router`   | Routes managing track-related actions such as adding tracks, retrieving track details, and listing all tracks. |
| /post        | `./post.router`    | Routes concerning post operations, suitable for managing blog posts, user comments, or other content types in the app. |
| /artist      | `./artist.router`  | Routes for artist-related functionalities including browsing artists, adding new artists, and retrieving specific artist details. |

### Detailed Explanation

- **ROUTE BASE**: This column specifies the base path for each set of routes, which is the first part of the URL path that groups similar functionalities.
- **LINKED ROUTER FILE**: Points to the specific router file within your project that contains more detailed routes and logic under each base path.
- **DESCRIPTION**: Provides a brief overview of what each router file is expected to handle in terms of application functionality.

### Usage

In the main Express application file, this `router` would be used to aggregate all specific routers under a central routing module, which is then used to simplify the overall routing architecture of the app. For instance, it could be incorporated into the main server file as follows:

```javascript
const express = require('express');
const app = express();
const mainRouter = require('./path/to/this/router');

app.use(mainRouter);
```

This setup organizes endpoints into logical groups based on their function, such as users, genres, tracks, posts, and artists, making the codebase easier to maintain and scale. Each router file (`user.router`, `genre.router`, etc.) would then define more specific routes (like `GET`, `POST`, `DELETE`) related to its domain.

### Notes

- Ensure that each router file correctly handles its respective routes and includes any necessary middleware for things like authentication and error handling.
- This structure helps decouple the routing logic from the application logic, promoting cleaner and more modular code.
- Make sure to appropriately secure each router according to the needs of the application, especially for routes that handle sensitive data.

Below is the table summarizing the endpoints for **post** management, based on the routing setup for our application. This format includes method, endpoint, token requirement, role specification, description, POST parameters, and expected returns:

| METHOD | ENDPOINT                  | TOKEN | ROLE   | DESCRIPTION                             | POST PARAMS                                | RETURNS                                  |
|--------|---------------------------|-------|--------|-----------------------------------------|-------------------------------------------|------------------------------------------|
| GET    | /posts/:id                | Yes   | -      | Fetch a single post by ID               | -                                         | Post details                             |
| GET    | /posts                    | Yes   | -      | Fetch all posts                         | -                                         | Array of posts                           |
| GET    | /posts/userPosts/:userId  | Yes   | User   | Fetch all posts for a specific user     | -                                         | Array of posts for the specified user    |
| DELETE | /posts/deletePost/:post_id| Yes   | Admin  | Delete a specific post by ID            | -                                         | { message: "Post deleted" }              |
| POST   | /posts/addPost            | Yes   | User   | Add a new post                          | title, content, etc.                      | { message: "Post added", post: { details } } |

### Detailed Explanation

- **METHOD**: Indicates the HTTP method used for the request (GET, POST, DELETE).
- **ENDPOINT**: Describes the specific API endpoint path. I added `/posts` as a base to each endpoint to reflect a common RESTful design pattern.
- **TOKEN**: Specifies whether an authentication token is required to access the endpoint. "Yes" indicates that these operations generally need user authentication.
- **ROLE**: If a specific user role is necessary to access the endpoint, it is listed here. For instance, deleting a post might be restricted to admin users, while adding a post might be available to any authenticated user.
- **DESCRIPTION**: Provides a brief explanation of the endpoint's purpose.
- **POST PARAMS**: Lists the parameters required in the POST request's body for endpoints that create or modify data. For GET and DELETE requests, this is not applicable and is represented by "-".
- **RETURNS**: Describes the expected response format and content returned by the server after processing the request.

### Notes

- The routes and their setup imply a need for user authentication and possibly authorization for certain actions (e.g., deleting posts may require admin privileges).
- Each endpoint assumes a RESTful approach where the base path (`/posts`) precedes specific actions or resource identifiers.
- Ensure your actual application security practices match the assumptions here about token and role requirements to secure sensitive operations effectively. 

This table format will be useful for API documentation, helping developers understand how to interact with your post management system efficiently.

Here's the table outlining the endpoints for **track** management based on the routing setup. This style matches our earlier format for presenting API endpoints clearly and comprehensively:

| METHOD | ENDPOINT              | TOKEN | ROLE   | DESCRIPTION                   | POST PARAMS                                  | RETURNS                                |
|--------|-----------------------|-------|--------|-------------------------------|----------------------------------------------|----------------------------------------|
| GET    | /tracks               | Yes   | -      | Fetch all tracks              | -                                            | Array of tracks                        |
| GET    | /tracks/:id           | Yes   | -      | Fetch a single track by ID    | -                                            | Track details                          |
| POST   | /tracks/addTrack      | Yes   | User   | Add a new track               | title, artist, genre, etc.                   | { message: "Track added", track: { details } } |

### Detailed Explanation

- **METHOD**: Specifies the HTTP method used for the request (GET, POST).
- **ENDPOINT**: Indicates the specific API endpoint path, with a base path of `/tracks` added for a common RESTful design pattern.
- **TOKEN**: "Yes" suggests that these operations generally require user authentication, to ensure data security and integrity.
- **ROLE**: If a specific user role is necessary to access the endpoint, it would be listed here. For instance, adding a new track might be available to authenticated users who are artists or admins.
- **DESCRIPTION**: Provides a brief explanation of what each endpoint does.
- **POST PARAMS**: For the POST request, this column lists the necessary data that should be included in the request body to add a new track. For GET requests, this field is not applicable and is represented by "-".
- **RETURNS**: Describes what the client can expect as a response from the server after the request has been processed.

### Notes

- The setup implies a RESTful approach where each action on tracks is neatly organized under a unified base path (`/tracks`).
- Make sure your actual application's security and user role checks align with the token and role requirements specified here to ensure proper access control.
- This table format can help in documenting the API effectively, offering developers clear guidance on how to interact with the track management system in your application.

Here's a formatted table outlining the endpoints for **user** management based on routing setup. This format will continue to use the clear and comprehensive style we have specified for presenting API endpoints:

| METHOD | ENDPOINT                  | TOKEN | ROLE   | DESCRIPTION                      | POST/PARAMS                               | RETURNS                                         |
|--------|---------------------------|-------|--------|----------------------------------|------------------------------------------|------------------------------------------------|
| GET    | /users                    | Yes   | Admin  | Fetch all users                  | -                                        | Array of users                                  |
| GET    | /users/:id                | Yes   | -      | Fetch a single user by ID        | -                                        | User details                                    |
| GET    | /users/currentUser/:spotify_id | Yes | User  | Fetch the current user's details | -                                        | Current user details                            |
| POST   | /users/addUser            | Yes   | Admin  | Add a new user                   | first_name, last_name, email, etc.       | { message: "User added", user: { details } }   |
| DELETE | /users/deleteUser/:spotify_id | Yes | Admin | Delete a user by Spotify ID      | -                                        | { message: "User deleted" }                    |
| PUT    | /users/updateUser/:spotify_id | Yes | User  | Update user details              | first_name, last_name, email, etc.       | { message: "User updated", user: { details } } |
| GET    | /users/genres/:userid     | Yes   | User  | Fetch genres associated with a user | -                                      | Array of genres linked to the user             |

### Detailed Explanation

- **METHOD**: Specifies the HTTP method used for the request (GET, POST, DELETE, PUT).
- **ENDPOINT**: Indicates the specific API endpoint path, with `/users` as a base to maintain a RESTful design.
- **TOKEN**: "Yes" indicates that these operations generally require user authentication, often to ensure data security and integrity.
- **ROLE**: Specifies if a specific user role is necessary to access the endpoint, such as "Admin" for adding or deleting users, or "User" for fetching personal data or updating one's own information.
- **DESCRIPTION**: Provides a brief explanation of what each endpoint does.
- **POST/PARAMS**: For POST and PUT requests, this column lists the data needed in the request body. For GET and DELETE requests, parameters in the endpoint (like IDs) are noted.
- **RETURNS**: Describes what the client can expect as a response from the server after the request has been processed.

### Notes

- This API design assumes that certain actions like adding or deleting a user are restricted to administrators, while actions like updating a user or fetching personal genres are available to individual users.
- Ensure that your application's actual security practices align with these token and role requirements to control access effectively.
- Use consistent endpoint naming and structure to facilitate easier maintenance and scalability of your application’s backend.

This table serves as a part of the API documentation, providing a clear guideline for developers on how to interact with the user management functionalities within your application.

The code you've provided includes some modifications and additions to the routes for user management compared to the previous version. Let's detail the changes and then provide the updated table of endpoints:

### Changes in the Code:
1. **Function Rename**: `addUser` is now `createUser`. This change updates the terminology to a more common CRUD (Create, Read, Update, Delete) naming convention.
2. **New Endpoints**:
   - `/checkFriend`: A new POST route to check if the current user is following another user.
   - `/followUser`: A new POST route for following a user.
   - `/unfollowUser`: A new POST route for unfollowing a user.

### Updated Table of Endpoints:
Here's the updated table of endpoints, reflecting the changes and additions:

| METHOD | ENDPOINT                     | TOKEN | ROLE   | DESCRIPTION                                 | POST/PARAMS                               | RETURNS                                          |
|--------|------------------------------|-------|--------|---------------------------------------------|-------------------------------------------|-------------------------------------------------|
| GET    | /users                       | Yes   | Admin  | Fetch all users                             | -                                         | Array of users                                  |
| GET    | /users/:id                   | Yes   | -      | Fetch a single user by ID                   | -                                         | User details                                    |
| GET    | /users/currentUser/:spotify_id | Yes | User  | Fetch the current user's details            | -                                         | Current user details                            |
| POST   | /users/addUser               | Yes   | Admin  | Add a new user                              | first_name, last_name, email, etc.        | { message: "User added", user: { details } }   |
| DELETE | /users/deleteUser/:spotify_id| Yes   | Admin  | Delete a user by Spotify ID                 | -                                         | { message: "User deleted" }                     |
| PUT    | /users/updateUser/:spotify_id| Yes   | User  | Update user details                         | first_name, last_name, email, etc.        | { message: "User updated", user: { details } } |
| GET    | /users/genres/:userid        | Yes   | User  | Fetch genres associated with a user         | -                                         | Array of genres linked to the user             |
| POST   | /users/checkFriend           | Yes   | User  | Check if a user is following another user   | follower_id, following_id                 | { isFollowing: true/false }                     |
| POST   | /users/followUser            | Yes   | User  | Follow a user                               | follower_id, following_id                 | { message: "User followed" }                    |
| POST   | /users/unfollowUser          | Yes   | User  | Unfollow a user                             | follower_id, following_id                 | { message: "User unfollowed" }                  |

### Notes:
- **TOKEN**: All routes now specify whether authentication is required ("Yes"), assuming that user operations are secured. This might vary depending on your actual authentication strategy.
- **ROLE**: Specifies the required user role for accessing the route. Admins can add or delete users, while regular users can update their information, follow/unfollow users, etc.
- **POST/PARAMS**: This specifies the parameters needed for POST and PUT requests. For the new endpoints (`checkFriend`, `followUser`, `unfollowUser`), you would typically pass user identifiers indicating who is performing the action and on whom.

These changes and the resulting endpoint documentation provide a comprehensive API guide that supports CRUD operations along with social features like following and unfollowing users, and checking friendship statuses, enhancing the application's functionality for user interactions.

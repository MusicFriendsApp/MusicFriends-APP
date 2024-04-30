# SpotifyFriends-APP
# A Social Networking/Friendship App based on Spotify API

SpotifyFriends is a web application that allows users to connect, network, and potentially meet others with similar music tastes. Users can discover new music, create playlists, and find meaningful connections, with other users, based on their favorite artists and genres.

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

## Some Mobile design...
![SpotifyFriendsAPP](https://github.com/SpotifyFriends/SpotifyFriends-APP/assets/91672631/55826454-fd23-45f2-a5d3-ad4fdd7128d6)

## Diagram Table...
![Diagrama SpotifyFriends](https://github.com/SpotifyFriends/SpotifyFriends-APP/assets/91672631/01ce97e7-3392-437a-aaea-b8956ef77906)


## Endpoints:

Here's how the table for the endpoints related to the artist management:

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

Below is the table formatted to outline the endpoints for genre management based on the routing setup:

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




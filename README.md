# UserApi

This is an API for managing user accounts. It provides endpoints to get, create, update, and delete user information.


## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository.
2. Install the required dependencies by running the following command:

   ```bash
   npm install
   ```

3. Set up the MongoDB connection by modifying the connection URL in `app.js`:

   ```javascript
   mongoose.connect('mongodb://localhost:27017/users');
   ```

## Usage

1. Start the server by running the following command:

   ```bash
   node app.js
   ```

2. Access the application in your web browser at `http://localhost:3000`.

## API Routes

The following API routes are available:

- `GET /api/users`: Retrieve all users.
- `GET /api/users/:id`: Retrieve a specific user by ID.
- `POST /api/users`: Create a new user.
- `PUT /api/users/:id`: Update a user by ID.
- `DELETE /api/users/:id`: Delete a user by ID.

You can test the API routes using a tool like Postman or cURL.

## Technologies Used

List the technologies, libraries, and frameworks used in your project.

- Node.js
- Express.js
- MongoDB
- Mongoose
- Body-parser

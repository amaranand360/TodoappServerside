# 📝 To-Do App Serverside

This is a Node.js application with login/logout/register and CRUD functionalities for managing to-do items.
# 🚀 Installation

    Clone the repository: git clone https://github.com/your-username/To-Do-App-with-Authentication.git
    Install the dependencies: npm install

# 🔑 Authentication

The app uses a JSON Web Token (JWT) for authentication. To register a new user, make a POST request to /register with a JSON payload containing a username and password field. To log in, make a POST request to /login with the same payload. The server will respond with a JWT token that can be used to authenticate subsequent requests.
# 🎯 Usage

    Start the server: npm start
    Open your web browser and go to http://localhost:3000

# 📝 API Routes
GET /todos

Returns a list of all to-do items for the authenticated user.
GET /todos/:id

Returns a single to-do item by ID for the authenticated user.
POST /todos

Creates a new to-do item for the authenticated user.
PUT /todos/:id

Updates an existing to-do item by ID for the authenticated user.
DELETE /todos/:id

Deletes a to-do item by ID for the authenticated user.
POST /logout

Logs out the authenticated user.
🤝 Contributing

Contributions are always welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

🙏 Credits

   - Node.js
   - Express.js
   - jsonwebtoken

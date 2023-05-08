# 📝 To-Do App Serverside with Authentication

This is Backend side project of Todo app with Node.js and Express.js application with login/logout/register and CRUD functionalities for managing to-do items.
# 🚀 Installation

    Clone the repository: git clone https://github.com/amaranand360/TodoappServerside.git
    Install the dependencies: npm install
    
# 🎯 Usage

    Start the server: npm start
    Open your web browser and go to http://localhost:3000
 
 # 🚀 Live Demo
 
- Live link : https://todoappbyamar.onrender.com

# 🔑 Authentication

The app uses a JSON Web Token (JWT) for authentication. To register a new user, make a POST request to /register with a JSON payload containing a username and password field. To log in, make a POST request to /login with the same payload. The server will respond with a JWT token that can be used to authenticate subsequent requests.

# 📝 API Routes
<h3> POST /register </h3>

-  Allow to create account for new user.

<h3> POST /login </h3>

-  allow to Log in with user authentication.

<h3> GET /tasks </h3>

- Returns a list of all to-do items for the authenticated user.

<h3>GET /task/:id </h3>

- Returns a single to-do item by ID for the authenticated user.

<h3>POST /task/new</h3>

- Creates a new to-do item for the authenticated user.

<h3>PUT /tasks/:id</h3>

- Updates an existing to-do item by ID for the authenticated user.

<h3> DELETE /task/:id </h3>

- Deletes a to-do item by ID for the authenticated user.

<h3> POST /logout</h3>

- Logs out the authenticated user.

# 🤝 Contributing

Contributions are always welcome! If you'd like to contribute to this project, please fork the repository and submit a pull request.

# 📧 Contact

If you have any questions or comments, please feel free to contact me at: amar.anand0030@gmail.com 👈

# Noter- MERN Stack Note Taking App

Welcome to **Noter**, a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application designed for simple note taking with user authentication and CRUD operations.

## Features

- **User Authentication**: 
  - Register new users.
  - Login with existing credentials.
  - Logout securely.

- **Note Management**:
  - Create new notes.
  - View existing notes.
  - Update notes.
  - Delete notes.

## Technologies Used

- **Frontend**:
  - React.js
  - React Router
  - Axios (for API requests)
  - Bootstrap (for styling)

- **Backend**:
  - Node.js
  - Express.js
  - MongoDB (with Mongoose for object modeling)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```
   git clone https://github.com/your-username/notes-made.git
   cd notes-made
   ```

2. **Install dependencies**:
   ```
   cd frontend
   npm install
   cd ../backend
   npm install
   ```

3. **Set up MongoDB**:
   - Make sure you have MongoDB installed locally or use a cloud MongoDB service.
   - Update your MongoDB URI in `backend/config/config.env`.

4. **Start the servers**:
   - Start the backend server:
     ```
     cd backend
     npm start
     ```
   - Start the frontend development server:
     ```
     cd frontend
     npm start
     ```

5. **Access the application**:
   - Open your browser and go to `http://localhost:3000` to see the application running.

## Folder Structure

```
notes-made/
├── backend/            # Backend Node.js application
│   ├── config/         # Configuration files
│   ├── controllers/    # Route controllers
│   ├── models/         # Mongoose models
│   ├── routes/         # Express routes
│   └── ...
└── frontend/           # React frontend application
    ├── public/         # Public assets
    ├── src/            # React application source
    └── ...
```

## Contributing

Contributions are welcome! To contribute:
- Fork the repository.
- Create your feature branch (`git checkout -b feature/YourFeature`).
- Commit your changes (`git commit -am 'Add some feature'`).
- Push to the branch (`git push origin feature/YourFeature`).
- Create a new Pull Request.

## Acknowledgments

- This project was created as part of learning the MERN stack.
- Inspiration and guidance from various online tutorials and resources.🚀

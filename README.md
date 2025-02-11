# Task Management API

A RESTful API for managing tasks built with Node.js, Express, and MongoDB.

## What I Learned 🎓

During this Learnathon, I gained experience with:
- Building RESTful APIs using Express.js
- MongoDB database operations using Mongoose
- Asynchronous programming in Node.js
- API testing using Postman
- Deployment on cloud platforms (Vercel/Render/Heroku)
- Version control with Git and GitHub

## Project Structure 📁

```
task-management-api/
  ├── config/         # Database configuration
  ├── models/         # Database models
  ├── routes/         # API routes
  ├── .env           # Environment variables
  ├── server.js      # Main application file
  └── vercel.json    # Vercel deployment config
```

## How It Works 🛠️

- **Database Connection**: MongoDB Atlas is used for data storage
- **Routes**: Express router handles CRUD operations
- **Models**: Mongoose schema defines task structure
- **Middleware**: Express.json parses incoming requests

## API Endpoints 🔚

- `POST /api/tasks`: Create a new task
- `GET /api/tasks`: Get all tasks
- `GET /api/tasks/:id`: Get a specific task
- `PUT /api/tasks/:id`: Update a task
- `DELETE /api/tasks/:id`: Delete a task

## Setup Instructions 🚀

1. Clone the repository:
   ```bash
   git clone [your-repo-link]
   cd task-management-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=3000
   ```

4. Run the server:
   ```bash
   # Development
   npm run dev
   
   # Production
   npm start
   ```

## Deployed Link 🌐

[[Your API Link Here](http://localhost:3000/api/tasks)]

## Testing 🧪

Use Postman or browser to test the API endpoints:
1. Create a new task (POST)
2. Get all tasks (GET)
3. Get specific task (GET)
4. Update task (PUT)
5. Delete task (DELETE)

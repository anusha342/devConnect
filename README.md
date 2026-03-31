# devConnect

DevConnect Backend - A professional networking platform for developers.

## Features

- User authentication and authorization
- Profile management
- Connection requests system
- Secure JWT-based authentication
- MongoDB database integration

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Start the server: `npm start`

## Environment Variables

```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
NODE_ENV=production
FRONTEND_URL=your_frontend_url
```

## API Endpoints

- `POST /signup` - User registration
- `POST /login` - User login
- `POST /logout` - User logout
- And more...

## Deployment

This project is configured for deployment on Vercel with the included `vercel.json` configuration.
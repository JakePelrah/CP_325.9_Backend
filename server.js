// Import necessary modules
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the port for the server
const port = 3000;
const app = express();

// Import routes
import { authRouter } from './routes/auth.js';


// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, 'dist'))); // Serve static files from 'dist'


// Configure session management
app.use(session({
  store: MongoStore.create({ mongoUrl: 'mongodb://localhost/lmd' }),
  secret: process.env.SESSION_SECRET, // Secret for session encryption
  resave: false, // Prevent resaving unchanged sessions
  saveUninitialized: false, // Don't save uninitialized sessions
  cookie: { secure: false } // Set secure cookies (change to true in production)
}));

// // Initialize passport session management
app.use(passport.authenticate('session'));

app.use('/', authRouter)


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
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

// // Middleware to manage session messages
// app.use(function(req, res, next) {
//   var msgs = req.session.messages || []; // Get messages from session
//   res.locals.messages = msgs; // Make messages available to views
//   res.locals.hasMessages = !!msgs.length; // Boolean for message existence
//   req.session.messages = []; // Clear messages after use
//   next(); // Proceed to the next middleware
// });


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
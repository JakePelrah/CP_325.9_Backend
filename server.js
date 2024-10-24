// Import necessary modules
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cors from 'cors'
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import MongoStore from 'connect-mongo';

// Import routes
import { authRouter } from './routes/auth.js';


// Get the directory name of the current module
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the port for the server
const port = 3000;
const app = express();

// Middleware setup
app.use(cors())
app.use(express.json()); // Parse JSON bodies
app.use(cookieParser()); // Parse cookies
app.use(session({
  secret: process.env.SESSION_SECRET, // Secret for session encryption
  resave: false, // Prevent resaving unchanged sessions
  saveUninitialized: false, // Don't save uninitialized sessions
  store: MongoStore.create({ 
    mongoUrl: "mongodb://localhost:27017",
    dbName:"lmd",
   }),
  // cookie: { secure: false } // Set secure cookies (change to true in production)
}));
app.use(passport.authenticate('session'));
app.use(function(req, res, next) {
  var msgs = req.session.messages || []; // Get messages from session
  res.locals.messages = msgs; // Make messages available to views
  res.locals.hasMessages = !!msgs.length; // Boolean for message existence
  req.session.messages = []; // Clear messages after use
  next(); // Proceed to the next middleware
});

app.use('/', authRouter)

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
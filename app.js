const express = require('express'); // imports the Express module for creating a web server
const path = require("path"); // imports the path module for working with file and directory paths       

const indexRouter = require("./routes/indexRouter");

const app = express(); // creates an Express app object
const PORT = process.env.PORT || 3000; // sets the port number for the server to listen on
 
const ejs = require('ejs'); // imports the EJS module for rendering templates

// Configure EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware to parse URL-encoded data from the req.body (for form submissions)
app.use(express.urlencoded({ extended: true }));

// Mount the router
app.use("/", indexRouter);

// Start the server and listen on the specified port
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
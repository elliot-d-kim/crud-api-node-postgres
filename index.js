// Entry point of server

// SETTING UP AN EXPRESS SERVER

// Require dependencies

// Express: provides tools for creating servers and handling HTTP requests/responses
// Body Parser: helps parse incoming request bodies in different formats (e.g., JSON, URL-encoded data)
const express = require('express')
const bodyParser = require('body-parser')

// Initialize Express app; set port
const app = express()
const port = 3000

// Set up Express to use Body Parser to parse JSON and URL-encoded data in inbound requests
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,     // allows parsing of nested objects
    })
)

// Responding to GET requests from client:
// When user makes GET request to root URL of server, route handler is triggered and responds

// Set up route handler for GET requests to root URL ('/'), e.g., www.example.com/
app.get('/', (request, response) => {
    // Send response to client in JSON format
    response.json({ info: 'Node.js, Express, and Postgres API'})
})

// Set up local port for app to listen on
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})


// CONNECTING TO A POSTGRES DATABASE FROM NODE.JS



// SETTING UP CRUD FUNCTIONS IN A REST API
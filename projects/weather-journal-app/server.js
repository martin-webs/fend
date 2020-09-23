// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Middleware
const bodyParser = require('body-parser');
// Configure express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('./website'));


// Setup Server
const server = app.listen(8000, () => {
    console.log('Server listening on port 8000...');
});

//Creating a GET endpoint
//This is a response from a GET endpoint
app.get('/dataRoute', routeData1);
function routeData1 (req,res) {
    res.send(projectData);
    return projectData;

};

//Creating a POST endpoint
app.post('https://localhost:8000/dataRoute', routeData2);
function routeData2 (req,res) {
    projectData.answer = req.body;
    res.send('Request received');
 //   projectData.temperature = req.body.temperature;
 //   projectData.date = req.body.date;
 //   projectData.userResponse = req.body.userResponse;
}

// Callback function to complete GET '/all'

// Post Route
  

    

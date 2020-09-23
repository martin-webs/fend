/* Global Variables */
// const apiKey = '?';
// const zipCode = '10001';
// const owmUrl = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=${apiKey}`
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={your api key}
//  Create a new date instance dynamically with JS
// let d = new Date();
// let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



/* Function to POST data */
//Post Data
const fetch = require('node-fetch');
const postData = async (url = "", data = {}) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData = await response.json();
    return newData;
  } catch (error) {
    console.log("error ", error);
  }
};

postData('https://localhost:8000/dataRoute', {name: 'Joe'})
.then(result => {
  console.log(result);
}).catch(error => {
  console.log(error);
});

  // TODO-Call Function  


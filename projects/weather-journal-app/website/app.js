/* Global Variables */
//  Create a new date instance dynamically with JS
let d = new Date();
let ndate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

const baseURL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const apiKEY = ',us&appid=f39412133af70263bacfa937b826adca&units=imperial';

const postData = async (url = "", data = {} ) => {
  const response = await fetch(url, {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  try {
    const newData1 = await response.json();
    return newData1;
  } catch (error) {
    console.log("error ", error);
  }
}

const getWeather = async (url ="", zip, key) => {
    const requestWeather = await fetch (url+zip+key);
    try {
      const data = await requestWeather.json();
      return data;
    } catch (error) {
      console.log("error", error);
    }
}

const submitButton = document.getElementById('generate');

submitButton.addEventListener('click', () => {
    const zipCode = document.getElementById('zip').value;
    const feeling = document.getElementById('feelings').value;
    getWeather(baseURL, zipCode, apiKEY)
        .then((data) => {
            console.log(data);
            postData('dataRoute', { date: ndate, temp: data.main.temp, feeling: feeling }); 
          }).then(function () {
            updateUi();
        });
});

const updateUi = async () => {
  console.log('updateUi up and running');
  const request = await fetch('dataRoute');
  try {
    const allData = request.json();
    console.log('try started');
    document.getElementById('date-span').innerHTML = allData.date;
    document.getElementById('temp-span').innerHTML = allData.temperature;
    document.getElementById('feel-span').innerHTML = allData.feeling;
  } catch (error) {
      console.log("error",error);
  }
}


const buttn=document.getElementById('wheatherbuttn');
const disp=document.getElementById('display');
const degree=document.getElementById('degree');
const apiKey = '6a622aebc0e98c26c8f274c649c9489c';
buttn.addEventListener("click",()=>{
    const city=disp.value;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    degree.textContent="";
    const newitem=document.createElement('h1');
 // Fetch weather data from the API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("city not found!!");
            } else {
                const temperature = data.main.temp; // Get the temperature from the API response
                newitem.textContent = `${temperature}°C`; // Display the temperature
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            newitem.textContent = 'Error';
        });




    
    
  
    degree.appendChild(newitem);
})









const getWeather = () => {
    const city = cityInput.value; // Get the city name from the input field

    // Construct the API URL
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Fetch weather data from the API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                temperatureDisplay.textContent = 'City not found!';
            } else {
                const temperature = data.main.temp; // Get the temperature from the API response
                temperatureDisplay.textContent = `Temperature in ${city}: ${temperature}°C`; // Display the temperature
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            temperatureDisplay.textContent = 'Error fetching weather data.';
        });
};
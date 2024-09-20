const buttn = document.getElementById('wheatherbuttn');
const disp = document.getElementById('display');
const degree = document.getElementById('degree');
const apiKey = '6a622aebc0e98c26c8f274c649c9489c';

const fetchWeather = () => {
    const city = disp.value;

    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    degree.textContent = "";
    const newitem = document.createElement('h1');

    // Fetch weather data from the API
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                alert("City not found!");
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
};

// Add click event listener to the button
buttn.addEventListener("click", fetchWeather);

// Add keydown event listener to the input field to trigger fetch on pressing "Enter"
disp.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        fetchWeather(); // Call the same function as button click
    }
});

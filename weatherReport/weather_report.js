function showWeatherDetails(event){
    event.preventDefault();

    const city=document.getElementById('city').value;
    const apiKey='97e5aa8935817a5377bd21fb673ee627';
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response=>response.json())
        .then(data=>{
            const weatherinfo=document.getElementById('weatherinfo');
            weatherinfo.innerHTML=`<h2>weather in ${data.name}</h2>
            <p>temperature: ${data.main.temp} &#8451;</p>
            <p>weather: ${data.weather[0].description}</p>`;
        })

        .catch(error => {
            console.error('Error fetching weather:', error);
            const weatherinfo = document.getElementById('weatherinfo');
            weatherinfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
          });
}

document.getElementById('weatherform').addEventListener('submit',showWeatherDetails);



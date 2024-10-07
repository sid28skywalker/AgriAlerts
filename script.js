const apiKey = '4f7b6f6b7d2b661bf54a48f4622bd01a';  // OpenWeatherMap API key

document.getElementById('getDetails').addEventListener('click', () => {
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    // Fetch and display soil moisture data
    fetch('assets/soilMoisture.json')
        .then(response => response.json())
        .then(data => {
            const soilMoistureData = data.map(item => item.soilMoisture);
            document.getElementById('soilMoisture').innerText = 'Soil Moisture: ' + soilMoistureData.join(', ');

            const soilMoistureChartCtx = document.getElementById('soilMoistureChart').getContext('2d');
            new Chart(soilMoistureChartCtx, {
                type: 'line',
                data: {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Soil Moisture',
                        data: soilMoistureData,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching soil moisture data:', error));

    // Fetch and display precipitation data
    fetch('assets/precipitation.json')
        .then(response => response.json())
        .then(data => {
            const precipitationData = data.map(item => item.precipitation);
            document.getElementById('precipitation').innerText = 'Precipitation: ' + precipitationData.join(', ');

            const precipitationChartCtx = document.getElementById('precipitationChart').getContext('2d');
            new Chart(precipitationChartCtx, {
                type: 'line',
                data: {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Precipitation',
                        data: precipitationData,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching precipitation data:', error));

    // Fetch and display vegetation data
    fetch('assets/vegetation.json')
        .then(response => response.json())
        .then(data => {
            const vegetationData = data.map(item => item.vegetation);
            document.getElementById('vegetation').innerText = 'Vegetation Health: ' + vegetationData.join(', ');

            const vegetationChartCtx = document.getElementById('vegetationChart').getContext('2d');
            new Chart(vegetationChartCtx, {
                type: 'line',
                data: {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Vegetation Health',
                        data: vegetationData,
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching vegetation data:', error));

    // Fetch and display flood levels data
    fetch('assets/floodLevels.json')
        .then(response => response.json())
        .then(data => {
            const floodLevelsData = data.map(item => item.floodLevels);
            document.getElementById('floodLevels').innerText = 'Flood Levels: ' + floodLevelsData.join(', ');

            const floodLevelsChartCtx = document.getElementById('floodLevelsChart').getContext('2d');
            new Chart(floodLevelsChartCtx, {
                type: 'line',
                data: {
                    labels: data.map(item => item.date),
                    datasets: [{
                        label: 'Flood Levels',
                        data: floodLevelsData,
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching flood levels data:', error));

    // Fetch and display weather data from OpenWeatherMap
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(weatherData => {
            document.getElementById('weather').innerText = `Weather: ${weatherData.weather[0].description}, Temperature: ${Math.round(weatherData.main.temp - 273.15)}°C`;
        })
        .catch(error => console.error('Error fetching weather data:', error));
});

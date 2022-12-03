const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');
const input = document.querySelector('input');

search.addEventListener('click', () => {

    const APIKey = 'b814b4da479751cf66b8880118ab7abf';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '440px';

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');


                return;

            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main){
            case 'Clear':
                image.src = 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=826&t=st=1670017612~exp=1670018212~hmac=53a94457e64b0b659dc4433fd3487d81f1dd0857fca18889cc13854a6e7bbbdf';
            break;

            case 'Rain':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1247/1247773.png?w=826&t=st=1670023301~exp=1670023901~hmac=01dd48c0be7dd7407d9a9da1f362b85044664b15dc6e7fc7fc5f73f0b8548107';
                break;

            case 'Snow':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1242/1242868.png?w=826&t=st=1670023582~exp=1670024182~hmac=9c90a8964d461c83cf86b7641f7d409901798424c4bd390a64f3961e6231cab8';
            break;

            case 'Clouds':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1158/1158500.png?w=826&t=st=1670023375~exp=1670023975~hmac=c636fb45d96e9793a5d513cb1e497ca5300024ae64cf16b86edf66be5af8d2e1';
            break;

            case 'Haze':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png?w=826&t=st=1670023277~exp=1670023877~hmac=1d50ea49d2fab5c05cbf98f270458714559869f41a2a1f665e0fd21a34f0ce18';
            break;

            default:
                image.src = '';
            break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
            container.style.height = '605px'
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
        });

});

input.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        const APIKey = 'b814b4da479751cf66b8880118ab7abf';
    const city = document.querySelector('.search-box input').value;

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json())
        .then(json => {

            if (json.cod === '404') {

                container.style.height = '440px';

                weatherBox.style.display = 'none';
                weatherDetails.style.display = 'none';

                error404.style.display = 'block';
                error404.classList.add('fadeIn');


                return;

            }
            error404.style.display = 'none';
            error404.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.weather-details .humidity span');
            const wind = document.querySelector('.weather-details .wind span');

            switch (json.weather[0].main){
            case 'Clear':
                image.src = 'https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7888.jpg?w=826&t=st=1670017612~exp=1670018212~hmac=53a94457e64b0b659dc4433fd3487d81f1dd0857fca18889cc13854a6e7bbbdf';
            break;

            case 'Rain':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1247/1247773.png?w=826&t=st=1670023301~exp=1670023901~hmac=01dd48c0be7dd7407d9a9da1f362b85044664b15dc6e7fc7fc5f73f0b8548107';
                break;

            case 'Snow':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1242/1242868.png?w=826&t=st=1670023582~exp=1670024182~hmac=9c90a8964d461c83cf86b7641f7d409901798424c4bd390a64f3961e6231cab8';
            break;

            case 'Clouds':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1158/1158500.png?w=826&t=st=1670023375~exp=1670023975~hmac=c636fb45d96e9793a5d513cb1e497ca5300024ae64cf16b86edf66be5af8d2e1';
            break;

            case 'Haze':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1197/1197102.png?w=826&t=st=1670023277~exp=1670023877~hmac=1d50ea49d2fab5c05cbf98f270458714559869f41a2a1f665e0fd21a34f0ce18';
            break; 

            case 'Drizzle':
                image.src = 'https://cdn-icons-png.flaticon.com/512/1113/1113720.png?w=826&t=st=1670026953~exp=1670027553~hmac=ba829caa946d17bd9ab0cb31d139afd0d6fd4e6b9f566653ada465e7464d2b49';
            break; 

            default:
                image.src = '';
            break;
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}km/h`;
            container.style.height = '605px'
            weatherBox.style.display = '';
            weatherDetails.style.display = '';
            weatherBox.classList.add('fadeIn');
            weatherDetails.classList.add('fadeIn');
        });
    }
});

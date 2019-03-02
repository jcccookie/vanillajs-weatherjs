class UI{
   constructor(){
      this.name = document.getElementById('w-name');
      this.temp = document.getElementById('w-temp');
      this.desc = document.getElementById('w-desc');
      this.icon = document.getElementById('w-icon');
      this.details = document.getElementById('w-details');
      this.humidity = document.getElementById('w-humidity');
      this.tempMax = document.getElementById('w-tempMax');
      this.tempMin = document.getElementById('w-tempMin');
      this.wind = document.getElementById('w-wind');
   }

   paint(weather){
      this.name.textContent = weather.name;
      this.temp.textContent = `${Math.ceil(weather.main.temp - 273.15)} °C`;
      this.desc.textContent = weather.weather[0].description;
      this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
      this.humidity.textContent = `Humidity: ${weather.main.humidity} %`;
      this.tempMax.textContent = `Max: ${Math.ceil(weather.main.temp_max - 273.15)} °C`;
      this.tempMin.textContent = `Min: ${Math.ceil(weather.main.temp_min - 273.15)} °C`;
      this.wind.textContent = `Wind: ${weather.wind.speed} m/s`
   }

}
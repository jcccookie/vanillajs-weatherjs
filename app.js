//Init storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();

//Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country);

//Init UI
const ui = new UI();

const getWeather = () => {
   weather.getWeather()
   .then(result => {
      ui.paint(result);
   })
   .catch(err => console.log(err));
}

//Pull data when loaded
document.addEventListener('DOMContentLoaded', getWeather);

//Change modal button
document.getElementById('w-change-btn').addEventListener('click', (e) => {
   const city = document.getElementById('city').value;
   const country = document.getElementById('country').value;

   weather.changeLocation(city, country);

   storage.setLocationData(city, country);

   // Get and display weather
   getWeather();

   // Close Modal
   $('#locModal').modal('hide');
})
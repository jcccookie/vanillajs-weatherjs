class Weather{
   constructor(city, country){
      this.apiKey = '14776a7826b36fe8b1002aeffc9a5ad1';
      this.city = city;
      this.country = country;
   }

   // Get weather info from API
   async getWeather(){
      const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);

      const responseData = await response.json();

      return responseData;
   }

   // Change location
   changeLocation(city, country){
      this.city = city;
      this.country = country;
   }
}
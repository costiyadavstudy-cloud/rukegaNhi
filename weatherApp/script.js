let country = document.getElementById("countryName");
let city = document.getElementById("cityName");
let day = document.getElementById("daysNum");
let Btn = document.getElementById("Show");
let info = document.getElementsByClassName("info");

Btn.addEventListener("click", () => {
  fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=2ac8411c81f742c8a42154014262806&q=${city.value},${country.value}&days=${day.value + 1}`,
  )
    .then((r) => {
      r.json().then((response) => {
        info[0].innerText = `maximum temperature : ${response.forecast.forecastday[day.value].day.maxtemp_c} C`
        info[1].innerText =   `minimum temperature : ${response.forecast.forecastday[day.value].day.mintemp_c} C`
        info[2].innerText =     `Humidity : ${response.forecast.forecastday[day.value].day.avghumidity}`
        info[3].innerText =       `Average temperature : ${response.forecast.forecastday[day.value].day.avgtemp_c} C`
        info[4].innerText =         `status : ${response.forecast.forecastday[day.value].day.condition.text}`
        info[5].innerText =          `rain possiblity : ${response.forecast.forecastday[day.value].day.daily_will_it_rain ? 'yes' : 'no'}`
      });
    })
    .catch(() => {
      console.log("error");
    });
});

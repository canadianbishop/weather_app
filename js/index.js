let form = document.querySelector('form');
let details = document.querySelector('.details');
let card = document.querySelector('.card');
let img = document.getElementById('img');
let icon = document.getElementById('iconImg');

let updateWeather = (data) => {
  // destructiring

  const { cityDets, weather } = data;

  // update html

  details.innerHTML = `  <h5 class="my-3 text-black">${cityDets.EnglishName}, ${cityDets.Country.EnglishName}</h5>
                  <div class="my-3">${weather.WeatherText}</div>
                  <div class="display-4 my-4">
                        <span>${weather.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                  </div>`;

  // update img and icons

  const iconsrc = `/img/icons/${weather.WeatherIcon}.svg`;
  icon.setAttribute('src', iconsrc);

  let weatherResult = weather.IsDayTime
    ? img.setAttribute('src', '../img/day.svg')
    : img.setAttribute('src', '../img/night.svg');

  // remove display none on card remove it

  if (card.classList.contains('d-none')) {
    card.classList.remove('d-none');
  }
};

let cityInfo = async (city) => {
  let cityDets = await getCity(city);
  let weather = await getWeather(cityDets.Key);

  return { cityDets, weather };
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let city = form.city.value.trim();
  form.reset();

  // update city details
  cityInfo(city)
    .then((data) => {
      console.log(data);
      updateWeather(data);
    })
    .catch((err) => console.log(err));
});

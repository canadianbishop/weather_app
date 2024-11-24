let form = document.querySelector('form');
let details = document.querySelector('.details');
let card = document.querySelector('.card');
let img = document.querySelector('.time');
let icon = document.querySelector('.icon img');


let updateWeather = (data)=>{
      // let weather = data.weather
      // let cityDets = data.cityDets;

      // console.log(cityDets,weather)


      // destructiring

      const{cityDets,weather} = data

      // update html

      details.innerHTML =`  <h5 class="my-3">${cityDets.EnglishName}</h5>
                  <div class="my-3">${weather.WeatherText}</div>
                  <div class="display-4 my-4">
                        <span>${weather.Temperature.Metric.Value}</span>
                        <span>&deg;C</span>
                  </div>`


      // update img and icons

      const iconsrc = `/weather/img/icons/${weather.WeatherIcon}.svg`
      icon.setAttribute('src', iconsrc);

            let  weatherResult = weather.IsDayTime ? img.setAttribute('src', '/weather/img/day.svg') : img.setAttribute('src', '/weather/img/night.svg');

      // if(weather.IsDayTime){
      //       img.setAttribute('src', '/weather/img/day.svg')
      // }else{
      //       img.setAttribute('src', '/weather/img/night.svg')
      // };


                  // remove display none on card remove it

                  if(card.classList.contains('d-none')){
                        card.classList.remove('d-none')
                  }     

}



let cityInfo = async(city)=>{

      let cityDets = await getCity(city);
      let weather = await  getWeather(cityDets.Key);

      return {cityDets, weather }     
}





form.addEventListener('submit', (e)=>{
      e.preventDefault();
      let city = form.city.value.trim();
      form.reset();
      
      // update city details
      cityInfo(city).then(data=> updateWeather(data) )
      .catch(err=> console.log(err));

      
});





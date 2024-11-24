let key = 'r48SckXJwGhYtVPAWnNELqusNTcX5EIs';


let getWeather = async(id)=>{

      let base = `http://dataservice.accuweather.com/currentconditions/v1/${id}`
      let query = `?apikey=${key}`;

      let response = await fetch(base + query);
      let data = await response.json();

      return data[0];
}


let getCity = async (city)=>{
let base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
let query = `?apikey=${key}&q=${city}`;

let response = await fetch(base + query);
let data = await response.json();

return data[0];


}

// getCity('london').then(data=>{
//       return getWeather(data.Key);
// }).then(data=>{
//       console.log(data)
// })
// .catch(err=> {
//             console.log(err);
// })

// getWeather("328328");








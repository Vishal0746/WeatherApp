const express = require("express")
const app = express();
const port = process.env.PORT || 3000;
const https = require("https")
const bodyparser = require("body-parser")
app.use(bodyparser.urlencoded({extented :true}));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", function(req,res)
{
  res.render("index", { weather: null, error: null });

})

app.post("/", function(req,res){
const city =req.body.city;

api key decripted
https.get(url, function(response)
{
//console.log(response.statusCode);

response.on("data", function(data)
{
  //printing data from api

  const weather =JSON.parse(data);
  console.log(data);

  let place = `${weather.name}`,
                    /* you shall calculate the current timezone using the data fetched*/
                    weatherTimezone = `${new Date(
                      weather.dt * 1000 - weather.timezone * 1000
                    )}`;
                  let weatherTemp = `${weather.main.temp}`,
                    weatherPressure = `${weather.main.pressure}`,
                    /* you will fetch the weather icon and its size using the icon data*/
                    weatherIcon = `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
                    weatherDescription = `${weather.weather[0].description}`,
                    humidity = `${weather.main.humidity}`,
                    clouds = `${weather.clouds.all}`,
                    visibility = `${weather.visibility}`,
                    main = `${weather.weather[0].main}`,
                    weatherFahrenheit;
                  weatherFahrenheit = (weatherTemp * 9) / 5 + 32;


                  res.render("index", {
                                    weather: weather,
                                    place: place,
                                    temp: weatherTemp,
                                    pressure: weatherPressure,
                                    icon: weatherIcon,
                                    description: weatherDescription,
                                    timezone: weatherTimezone,
                                    humidity: humidity,
                                    fahrenheit: weatherFahrenheit,
                                    clouds: clouds,
                                    visibility1: visibility,
                                    main: main,
                                    error: null,
                                  });
                                  console.log("timeone :- "+weatherDescription);

})
})

})


app.listen(port, () =>
{
console.log("ready");
})

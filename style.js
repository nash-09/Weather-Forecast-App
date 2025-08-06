let input = document.querySelector("#input")
let btn = document.querySelector("#btn")
let temp = document.querySelector("#temp")
let cityName = document.querySelector("#city-name")
let feelsLike = document.querySelector("#feels-like")
let minTemp = document.querySelector("#min-temp")
let maxTemp = document.querySelector("#max-temp")
let humidity = document.querySelector("#humidity")
let pressure = document.querySelector("#pressure")
let windSpeed = document.querySelector("#wind-speed")
let windDeg = document.querySelector("#wind-deg")
let visibility = document.querySelector("#visibility")
let cloudiness = document.querySelector("#cloudiness")
let mainWeather = document.querySelector("#main-weather")
let description = document.querySelector("#description")
let iconCode = document.querySelector("#icon-code")
let sunrise = document.querySelector("#sunrise")
let sunset = document.querySelector("#sunset")
let timeZone = document.querySelector("#timezone")

btn.onclick = () =>{
    let city = input.value
    let a = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4462d5b610d99fa354ace74450fbf191&units=metric`

    let getData = async () => {
    let promise = await fetch(a)
    let data = await promise.json()
    cityName.innerText = `Weather Information of ${city}`
    temp.innerText = `Temperature : ${data.main.temp}`
    feelsLike.innerText = `Feels Like : ${data.main.feels_like}`
    minTemp.innerText = `Min Temp : ${data.main.temp_min}`
    maxTemp.innerText = `Max Temp : ${data.main.temp_max}`
    humidity.innerText = `Humidity : ${data.main.humidity}`
    pressure.innerText = `Pressure : ${data.main.pressure}`
    windSpeed.innerText = `Wind Speed : ${data.wind.speed}`
    windDeg.innerText = `Wind Deg : ${data.wind.deg}`
    visibility.innerText = `Visibility : ${data.visibility}`
    cloudiness.innerHTML = `Cloudiness : ${data.clouds.all}`
    mainWeather.innerText = `Main Weather : ${data.weather[0].main}`
    description.innerText = `Description : ${data.weather[0].description}`
    iconCode.innerText = `Icon Code : ${data.weather[0].icon}`
    sunrise.innerText = `Sunrise : ${unixToTime(data.sys.sunrise, data.timezone)}`
    sunset.innerText = `Sunset : ${unixToTime(data.sys.sunset, data.timezone)}`
    timeZone.innerText = `Time Zone : ${data.timezone}`
}
getData()
}

function unixToTime (unix, timezoneOffset){
    const date = new Date ((unix + timezoneOffset) * 1000)
    return date.toLocaleTimeString("en-US", { hour : '2-digit', minute : '2-digit'})
}
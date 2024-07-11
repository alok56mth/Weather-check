console.log("hello world")
const apiKey = "e9e3b7fe79aae2e0969973883e1eb782";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=matric&q=";
const serrchBox= document.querySelector(".search input");
const serrchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl+city+`&appid=${apiKey}`);
    let data= await response.json();
    // console.log(data);
    document.querySelector(".city").innerHTML =data.name;
    let wet = (data.main.temp) -273;
    document.querySelector(".temp").innerHTML =Math.round(wet)+"°c";
    document.querySelector(".humidity").innerHTML =data.main.humidity +" %";
    document.querySelector(".wind").innerHTML =data.wind.speed +" km/hr";

    if(data.weather[0].main=="Clouds"){
        weatherIcon.src ="clouds.png";
    }
    if(data.weather[0].main=="Clear"){
        weatherIcon.src ="clear.png";
    }
    if(data.weather[0].main=="Rain"){
        weatherIcon.src ="rain.png";
    }
    if(data.weather[0].main=="Drizzle"){
        weatherIcon.src ="drizzle.png";
    }
    if(data.weather[0].main=="Snow"){
        weatherIcon.src ="snow.png";
    }
    if(data.weather[0].main=="Mist"){
        weatherIcon.src ="mist.png";
    }
    document.querySelector(".weather").style.display = "block";

}
serrchBtn.addEventListener("click",()=>{
    checkWeather(serrchBox.value);
})



function set(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(dataWe => showPM(dataWe));

}
function getTxt() {
    var txt = document.getElementById("txt").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(dataWe => showPM(dataWe))
    //.then(data => console.log(data))
}
function showTast(dataWe){
    document.getElementById("lon").innerHTML =`${dataWe.coord.lon}`;
    document.getElementById("lat").innerHTML =`${dataWe.coord.lat}`;
    document.getElementById("temp").innerHTML =`${dataWe.main.temp}`;
    document.getElementById("temp_min").innerHTML =`${dataWe.main.temp_min}`;
    document.getElementById("temp_max").innerHTML =`${dataWe.main.temp_max}`;
    document.getElementById("feels_like").innerHTML =`${dataWe.main.feels_like}`;
    document.getElementById("pressure").innerHTML =`${dataWe.main.pressure}`;
    document.getElementById("humidity").innerHTML =`${dataWe.main.humidity}`;
    document.getElementById("grnd_level").innerHTML =`${dataWe.main.grnd_level}`;
    document.getElementById("sea_level").innerHTML =`${dataWe.main.sea_level}`;
    document.getElementById("wind_speed").innerHTML =`${dataWe.wind.speed}`;
    document.getElementById("wind_deg").innerHTML =`${dataWe.wind.deg}`;
    document.getElementById("wind_gus").innerHTML =`${dataWe.wind.gust}`;
    showTast(dataWe);
}
function showTast(dataWe){
    document.getElementById("name").innerHTML =`${dataWe.name}`;
    document.getElementById("country").innerHTML =`${dataWe.sys.country}`;
    document.getElementById("weather_main").innerHTML =`${dataWe.weather.main}`;
    document.getElementById("description").innerHTML =`${dataWe.weather.description}`;
    document.getElementById("img-1").src =`http://openweathermap.org/img/wn/${dataWe.weather.icon}@2x.png`;
    showPM(dataWe);
}
function showPM(dataWe){
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${dataWe.coord.lat}&lon=${dataWe.coord.lon}&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(rea => rea.json())
    .then(dataW => console.log(dataW))
    .then(dataW => showP(dataW))
} 
function showP(dataW){
    document.getElementById("co").innerHTML =`CO : ${dataW.list[0].components.co} μg/m3`;
    document.getElementById("no").innerHTML =`NO : ${dataW.list[0].components.no} μg / m3`;
    document.getElementById("no2").innerHTML =`NO2 : ${dataW.list[0].components.no2} μg / m3`;
    document.getElementById("o3").innerHTML =`O3 : ${dataW.list[0].components.o3} μg/m3`;
    document.getElementById("so2").innerHTML =`SO2 : ${dataW.list[0].components.so2} μg / m3`;
    document.getElementById("pm2_5").innerHTML =`PM2.5 : ${dataW.list[0].components.pm2_5} μg/m3`;
    document.getElementById("pm10").innerHTML =`PM10 : ${dataW.list[0].components.pm10} μg / m3`;
    document.getElementById("nh3").innerHTML =`NH3 : ${dataW.list[0].components.nh3} μg / m3`;
    document.getElementById("pl-3").innerHTML =`คุณภาพอากาศระดับ : ${dataW.list[0].main.aqi}`;
}
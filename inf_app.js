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
    .then(dataWe => showTast(dataWe))
    //.then(data => console.log(data))
}
function showTast(dataWe){
    document.getElementById("lon").innerHTML =`ละติจูด : ${dataWe.coord.lon}`;
    document.getElementById("lat").innerHTML =`ลองจิจูด : ${dataWe.coord.lat}`;
    document.getElementById("temp").innerHTML =`อุณหภูมิ : ${dataWe.main.temp}°C`;
    document.getElementById("temp_min").innerHTML =`อุณหภูมิต่ำสุด : ${dataWe.main.temp_min}°C`;
    document.getElementById("temp_max").innerHTML =`อุณหภูมิสูงสุด : ${dataWe.main.temp_max}°C`;
    document.getElementById("feels_like").innerHTML =`อุณหภูมิเฉลี่ย : ${dataWe.main.feels_like}°C`;
    document.getElementById("pressure").innerHTML =`ความดันบรรยากาศ : ${dataWe.main.pressure} hPa`;
    document.getElementById("humidity").innerHTML =`ความชื้น : ${dataWe.main.humidity}%`;
    document.getElementById("grnd_level").innerHTML =`ความดันบรรยากาศระดับน้ําทะเล : ${dataWe.main.grnd_level} hPa`;
    document.getElementById("sea_level").innerHTML =`ความดันบรรยากาศพื้นดิน : ${dataWe.main.sea_level} hPa`;
    document.getElementById("wind_speed").innerHTML =`ความเร็วลม : ${dataWe.wind.speed} เมตร/วินาที`;
    document.getElementById("wind_deg").innerHTML =`ทิศทางลมองศา : ${dataWe.wind.deg} องศา`;
    document.getElementById("wind_gus").innerHTML =`ลมกระโชกแรง : ${dataWe.wind.gust} เมตร/วินาที`;
    document.getElementById("visibility").innerHTML =`ทัศนวิสัย : ${dataWe.visibility} เมตร`;
    showTas(dataWe);
}
function showTas(dataWe){
    document.getElementById("name").innerHTML =`${dataWe.name}`;
    document.getElementById("country").innerHTML =`${dataWe.sys.country}`;
    document.getElementById("description").innerHTML =`${dataWe.weather[0].description}`;
    document.getElementById("img-1").src =`http://openweathermap.org/img/wn/${dataWe.weather[0].icon}@2x.png`;
    showPM(dataWe);
}
function showPM(dataWe){
    fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${dataWe.coord.lat}&lon=${dataWe.coord.lon}&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(rea => rea.json())
    //.then(dataW => console.log(dataW))
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
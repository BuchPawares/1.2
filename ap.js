set();
function set(){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Bangkok&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(PM => showPM(PM));

}
function getTxt() {
    var txt = document.getElementById("txt").value;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${txt}&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(PM => showPM(PM))
    //.then(data => console.log(data))
} 

function showPM(PM){
    fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${PM.city.coord.lat}&lon=${PM.city.coord.lon}&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(re => re.json())
    .then(dataW => showP(dataW));
} 
function showP(dataW){
    document.getElementById("pl-1").innerHTML =`PM2.5 : ${dataW.list[0].components.pm2_5} μg/m3`;
    document.getElementById("pl-2").innerHTML =`CO : ${dataW.list[0].components.co} μg / m3`;
    document.getElementById("pl-3").innerHTML =`คุณภาพอากาศระดับ : ${dataW.list[0].main.aqi}`;
}

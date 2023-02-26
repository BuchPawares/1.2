set();
function set(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    //.then(data => console.log(data))
    .then(data => showData(data));

}
function getTxt() {
    var txt = document.getElementById("txt").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(data => showData(data))
    //.then(data => console.log(data))
} 
function showData(data){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&cnt=40&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(re => re.json())
    .then(dataWe => showTast(dataWe))
    //.then(dataWe => console.log(dataWe))  
}
function showPM(dataWe){
    fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${dataWe.city.coord.lat}&lon=${dataWe.city.coord.lon}&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(re => re.json())
    .then(dataW => showP(dataW));
} 
function showP(dataW){
    document.getElementById("pl-1").innerHTML =`PM2.5 : ${dataW.list[0].components.pm2_5} μg/m3`;
    document.getElementById("pl-2").innerHTML =`CO : ${dataW.list[0].components.co} μg / m3`;
    document.getElementById("pl-3").innerHTML =`คุณภาพอากาศระดับ : ${dataW.list[0].main.aqi}`;
}

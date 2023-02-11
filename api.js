set();
function set(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=Bangkok&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(data => showData(data));
}
function getTxt() {
    var txt = document.getElementById("txt").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(data => showData(data))
} 
function showData(data){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&units=metric&cnt=40&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(re => re.json())
    .then(dataWe => showTast(dataWe))
    .then(dataWe => console.log(dataWe))
    document.getElementById("demo").innerHTML =`${data.name}`;
    document.getElementById("demo1").innerHTML =`${data.main.temp_min}°C`;
    document.getElementById("demo2").innerHTML =`${data.sys.country}`;
    document.getElementById("demo3").innerHTML =`${data.weather[0].description}`;
    document.getElementById("img-0").src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}
function showTast(dataWe){
    document.getElementById("cwe-1").innerHTML =`${dataWe.city.name}`;
    document.getElementById("cwe-2").innerHTML =`${dataWe.city.name}`;
    document.getElementById("cwe-3").innerHTML =`${dataWe.city.name}`;
    document.getElementById("cwe-4").innerHTML =`${dataWe.city.name}`;
    document.getElementById("cw-t-1").innerHTML =`${dataWe.list[5].main.temp_min}°C`;
    document.getElementById("cw-t-1").innerHTML =`${dataWe.list[10].main.temp_min}°C`;
    document.getElementById("cw-t-1").innerHTML =`${dataWe.list[30].main.temp_min}°C`;
    document.getElementById("cw-t-1").innerHTML =`${dataWe.list[38].main.temp_min}°C`;
    document.getElementById("img-1").src =`http://openweathermap.org/img/wn/${dataWe.list[5].weather[0].icon}@2x.png`;
    document.getElementById("img-2").src =`http://openweathermap.org/img/wn/${dataWe.list[10].weather[0].icon}@2x.png`;
    document.getElementById("img-3").src =`http://openweathermap.org/img/wn/${dataWe.list[30].weather[0].icon}@2x.png`;
    document.getElementById("img-4").src =`http://openweathermap.org/img/wn/${dataWe.list[38].weather[0].icon}@2x.png`;
}

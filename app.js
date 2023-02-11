function getTxt() {
    var txt = document.getElementById("txt").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${txt}&units=metric&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(response => response.json())
    .then(data => showData(data))
} 
function showData(data){
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${data.name}&cnt=40&appid=a5551a799c6cda11fc25322be201b948&lang=th`)
    .then(re => re.json())
    .then(res => showTast(res))
    document.getElementById("demo").innerHTML =`${data.name}`;
    document.getElementById("demo1").innerHTML =`${data.main.temp_min}°C`;
    document.getElementById("demo2").innerHTML =`${data.sys.country}`;
    document.getElementById("demo3").innerHTML =`${data.weather[0].description}`;
    document.getElementById("img-0").src =`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
}
function showTast(res){
    document.getElementById("cwe-1").innerHTML =`${res.city.name}`;
}

const temperature =  () => {
    const searchInput = document.getElementById("search-input");
    const city = searchInput.value.toLowerCase();
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0610f0e9b0276ae2a3be844739e2d64&units=metric`
    
 
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature (data))
    
}
const setInnerText = (temp,text) => {
    document.getElementById(temp).innerText = text;
}

const displayTemperature = temperature =>{
    if(temperature.length == 0){
        alert("error")
    }
    else{
        setInnerText("city",temperature.name)
        setInnerText("temperature",temperature.main.temp)
        setInnerText("desc",temperature.weather[0].main)
        const weatherIcon = ` http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
        const images = document.getElementById("images");
        images.setAttribute("src",weatherIcon)
    }
}
const weatherSearch =  () => {
    const searchInput = document.getElementById("search-input");
    const city = searchInput.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b0610f0e9b0276ae2a3be844739e2d64`
    
 
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    
}
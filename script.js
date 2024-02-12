

const init = () => {
    const API_KEY = "e0ebd74e378dac2fc26904270a87cbf0";

    const data = {
        api: API_KEY,
        delay: 1000,
    }
    let timeout = null;
    document.querySelector(".city-input").addEventListener("input", (e)=>{
        if(timeout)clearTimeout(timeout);
        timeout = setTimeout(()=>{
            getDataFromApi(data, e.target.value);
        }, data.delay);
    })
}

const kelvinToCelc = (temp) => {
    return temp - 273.15;
}

const getDataFromApi = async (data, val) => {
    const res = await fetch("https://api.openweathermap.org/data/2.5/weather?q="+val+"&appid="+data.api);
    const json  = await res.json();
    if(json.name==undefined)return;
    console.log(json)
    document.querySelector(".city-name").innerHTML = json.name;
    document.querySelector(".temperature").innerHTML = "Temperatura: "+parseFloat(kelvinToCelc(json.main.temp)).toFixed(2)+"*C";
}

window.onload = init;
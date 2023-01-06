// const cities = [
    
//         {
//             'temp2.innerText' : 'value.temp',
//             'feels2.innerText' : 'value.feels_like',
//             'humidity2.innerText' : 'value.humidity',
//             'windS2.innerText' : 'value.wind_speed',
//             'minMaxT2.innerText' : 'value.min_temp' + "/" + 'value.max_temp',
//             'windD2.innerText' : 'value.wind_degrees',

//         },

//         {
//             'temp3.innerText' : 'value.temp',
//             'feels3.innerText' : 'value.feels_like',
//             'humidity3.innerText' : 'value.humidity',
//             'windS3.innerText' : 'value.wind_speed',
//             'minMaxT3.innerText' : 'value.min_temp' + "/" + 'value.max_temp',
//             'windD3.innerText' : 'value.wind_degrees',
//         },

//        {
//             'temp4.innerText' : 'value.temp',
//             'feels4.innerText' : 'value.feels_like',
//             'humidity4.innerText' : 'value.humidity',
//             'windS4.innerText' : 'value.wind_speed',
//             'minMaxT4.innerText' : 'value.min_temp' + "/" + 'value.max_temp',
//             'windD4.innerText' : 'value.wind_degrees',
//         }
// ]

// const apiKey = process.env.API_KEY;

const options = {
    method : 'GET',
    headers : {
        'X-RapidAPI-Key': 'd1085bd089msh3b332757ace770bp1f4d05jsne57a0f2b45ac',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const capitalize = (word) => {
    let lower = word.toLowerCase();
    cityName.innerText = lower.charAt(0).toUpperCase() + lower.slice(1)
}

const weatherCity = (city)=>{
let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;

let p = fetch(url, options);

p.then((response)=>{
    return response.json();
}).then((value)=>{
    console.log(value);

    temp1.innerText = value.temp;
    feels1.innerText = value.feels_like;
    humidity1.innerText = value.humidity
    windS1.innerText = value.wind_speed
    minMaxT1.innerText = value.min_temp + "/" + value.max_temp
    windD1.innerText = value.wind_degrees

    // console.log(cities);

    // console.log(cities[0])
}).then((err)=>{
    console.log(err);
})
}

const puneCity = (city) => {

    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    let q = fetch(url, options);

    q.then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value)

        temp2.innerText = value.temp
        feels2.innerText = value.feels_like
        humidity2.innerText = value.humidity
        windS2.innerText = value.wind_speed
        minMaxT2.innerText = value.min_temp + "/" + value.max_temp
        windD2.innerText = value.wind_degrees

    }).then((error)=>{
        console.log(error);
    })    
}

const newDelhiCity = (city) => {

    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    let q = fetch(url, options);

    q.then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value)

        temp3.innerText = value.temp
        feels3.innerText = value.feels_like
        humidity3.innerText = value.humidity
        windS3.innerText = value.wind_speed
        minMaxT3.innerText = value.min_temp + "/" + value.max_temp
        windD3.innerText = value.wind_degrees

    }).then((error)=>{
        console.log(error);
    })    
}

const hyderabadCity = (city) => {

    let url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
    let q = fetch(url, options);

    q.then((response) => {
        return response.json();
    }).then((value) => {
        console.log(value)

        temp4.innerText = value.temp
        feels4.innerText = value.feels_like
        humidity4.innerText = value.humidity
        windS4.innerText = value.wind_speed
        minMaxT4.innerText = value.min_temp + "/" + value.max_temp
        windD4.innerText = value.wind_degrees

    }).then((error)=>{
        console.log(error);
    })    
}


puneCity('Pune');
newDelhiCity('New Delhi');
hyderabadCity('Hyderabad');


submit.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize(searchCity.value);
    weatherCity(searchCity.value);
})

bangalore.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize('bangalore');
    weatherCity('bangalore');
} )

uttarakhand.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize('uttarakhand');
    weatherCity('uttarakhand');
} )

jaipur.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize('jaipur');
    weatherCity('jaipur');
} )

newyork.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize('New York');
    weatherCity('New York');
} )

italy.addEventListener('click', (e)=>{
    e.preventDefault();
    capitalize('italy');
    weatherCity('italy');
} )

weatherCity("Mumbai");
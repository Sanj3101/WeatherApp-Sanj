import React, { useEffect, useState } from 'react';

const WeatherCard = ({city }) => {
  const [weatherInfo, setweatherInfo] = useState(null);
  const [forecastInfo, setforecastInfo] = useState([]);
  const [loading, setLoading] = useState(true);


  const API_KEY = '56d1432d68a92e224392caaa6d2dc963';

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const [weatherRes, forecastRes] = await Promise.all([
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`),
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=${API_KEY}`)
      ]);

      const weatherJson = await weatherRes.json();
      const forecastJson = await forecastRes.json();

      setweatherInfo(weatherJson);

      const daily = forecastJson.list.filter(entry => entry.dt_txt.includes('12:00:00'));
      setforecastInfo(daily);
    } catch (error) {
      console.error('Error fetching weather:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);

  if (loading) {
    return <p className="text-center mt-6 text-gray-100">Loading weather data...</p>;
  }

  if (!weatherInfo || weatherInfo.cod !== 200) {
    if (weatherInfo==null){
      return <p className="text-center mt-6 text-gray-100">Enter a valid city name to check the weather !</p>
    }
    return <p className="text-center mt-6 text-gray-100">No data found for "{city}"</p>;
  }

  const {name, weather, main: { temp, humidity }, wind: { speed },} = weatherInfo;

  return (
    <div className='flex flex-col lg:grid lg:grid-cols-2 items-center p-10'>
    <div className="w-full h-[100%] max-w-md p-6 mt-4 flex flex-col justify-center items-center font-poppins 
                    bg-gradient-to-t from-yellow-100 via-yellow-200 to-yellow-400 text-black 
                    dark:bg-gradient-to-t dark:from-neutral-600 dark:via-neutral-700 dark:to-neutral-800  dark:text-white shadow-xl rounded-xl ">
        {/* current day weather */}
      <h2 className="font-semibold text-2xl mb-2">{name}</h2>
      <div className='flex flex-col items-center transition-all duration-300 hover:scale-105 ease-in'>
      <img src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`} alt="Weather Icon" className="w-20 h-20 shadow-lg rounded-full "/>
      <p className="text-lg mt-2 mb-4">{weather[0].description}</p>
      <p className="text-4xl font-bold mb-2">{Math.round(temp)}°C</p>
      </div>
      <div className="flex items-center justify-between gap-8 text-sm mt-4">
        <div className="flex items-center justify-between gap-2 transition-all duration-300 hover:scale-105 ease-in shadow-xl rounded-xl">
            <span className="material-symbols-outlined cursor-pointer text-black dark:text-white" >water_drop</span>
            <p>Humidity : {humidity}%</p>            
        </div>

        <div className="flex items-center justify-between gap-2 transition-all duration-300 hover:scale-105 ease-in shadow-xl rounded-xl">
            <span className="material-symbols-outlined cursor-pointer text-black dark:text-white" >air</span>
            <p>Wind Speed : {speed} km/h</p>            
        </div>
      </div>
      </div>

{/* 5 day  */}
<div className="w-full h-[100%] p-6 mt-4 flex flex-col justify-between items-center font-poppins 
                bg-gradient-to-t from-yellow-300 via-yellow-200 to-yellow-00 text-black 
                dark:bg-gradient-to-t dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800  dark:text-white shadow-xl rounded-xl ">
    <h3 className="text-xl font-semibold mt-6 mb-2">5-Day Forecast</h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-5 text-center">
        {forecastInfo.map((day, index) => (
          <div key={index} className=" flex sm:flex-col gap-2 items-center justify-between bg-yellow-500 dark:bg-neutral-800 rounded-lg p-4 transition-all duration-300 hover:scale-105 ease-in shadow-md">
            <p className="font-medium">{new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="Weather" className="w-12 h-12 mx-auto"/>
            <p>{Math.round(day.main.temp)}°</p>
            <p className="text-sm">{day.weather[0].main}</p>
          </div>
        ))}
      </div>
</div>
      
    </div>
  );
};

export default WeatherCard;

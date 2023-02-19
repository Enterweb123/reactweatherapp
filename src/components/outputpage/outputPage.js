import React from 'react';
import './outputPage.css';

const outputPage = ({ outputWeatherData, Todaydate, backtoHome }) => {

  const placeName = outputWeatherData.data.name;
  const temp = outputWeatherData.data.main.temp;
  const temperatures = `${Math.round(temp)} °c`;

  const humidity = outputWeatherData.data.main.humidity;
  const skydata = outputWeatherData.data.weather[0].description;
  const icon = outputWeatherData.data.weather[0].icon;
  const imgurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className='result_container'>
      <h1 className='placeName'> {placeName} </h1>
      <div className='temperatures'>
         <h1> {temperatures} </h1>
      </div>
      <p className='skydata'> {skydata} </p>
      <p className='humidity'>humidity - {humidity} % </p>
      <h4 className="date">{Todaydate(new Date())}</h4>
      <img src={imgurl} alt='icons'/>
      <button variant="contained" onClick={backtoHome}> Back to home </button>

    </div>
  )
}

export default outputPage;

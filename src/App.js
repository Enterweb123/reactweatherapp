import React, { useState } from 'react';
import axios from 'axios';

// components
import Inputpage from './components/inputpage/inputPage';
import Outputpage from './components/outputpage/outputPage';

// style link
import './App.css';

const App = () => {

  const [FormInputData, setFormInputdata] = useState("");
  const [weatheData, setWeatherData] = useState("");
  const [bg, setbg] = useState("normal");

  const ApiBuild = {
    key: "9c186bec8048800ce3241ffb0e4ea6ed",
    url: "https://api.openweathermap.org/data/2.5/"
  }

  // get weather data from Api
  const getWeatherData = async () => {
    const responceData = await axios.get(`${ApiBuild.url}weather?q=${FormInputData}&units=metric&APPID=${ApiBuild.key}`);
    console.log(responceData);

    if (responceData) {
      setWeatherData((curr) => curr = responceData);
      setFormInputdata("");
      // console.log(responceData);
      const backgroundSet = responceData.data.weather[0].description;
      // console.log(backgroundSet);

      switch(backgroundSet){
        case "clear sky":
        setbg((cur)=>cur="clearsky");
        break;
        case "few clouds":
        setbg((cur)=>cur="fewclouds");
        break;
        case "clear sky":
        setbg((cur)=>cur="clearsky");
        break;
        case "scattered clouds":
        setbg((cur)=>cur="scatteredclouds");
        break;
        case "broken clouds":
        setbg((cur)=>cur="brokenclouds");
        break;
        case "shower rain":
        setbg((cur)=>cur="showerrain");
        break;
        case "rain":
        setbg((cur)=>cur="rain");
        break;
        case "thunderstorm":
        setbg((cur)=>cur="thunderstorm");
        break;
        case "snow":
        setbg((cur)=>cur="snow");
        break;
        case "mist":
        setbg((cur)=>cur="mist");
        break;
        default:setbg((cur)=>cur="normal");

      }


    }
    else {
      console.log('api fetch failed');
    }
  }

  // handle input data
  const handleInputChange = (event) => {
    const inputTextValue = event.target.value;
    setFormInputdata(inputTextValue);
  }

  // date
  const TodayDate = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  // back to home function
  const ClearWeatherData = () => {
    setWeatherData((cur) => cur = "");
    setbg((cur)=>cur="normal");
  }


  return (
    <div className={bg} id='mainbody'>

      

      {
        !weatheData ? (
          <div>
            <Inputpage inputValues={FormInputData} handleChange={handleInputChange} handleSubmit={getWeatherData} />
          </div>
        ) : (
          <div>
            <Outputpage outputWeatherData={weatheData} Todaydate={TodayDate} backtoHome={ClearWeatherData} />
          </div>
        )
      }
    </div>
  )
}

export default App;

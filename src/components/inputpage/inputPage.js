import React from 'react';
import {Cloud,Search} from "@mui/icons-material";
import './inputPage.css';

const inputPage = ( {inputValues,handleChange, handleSubmit} ) => {
  return (
    <div className='input__container'>

      <p className='weather_text'>Weather App</p>

        <div className='searchbox'>
            <Search/>
            <input className='inputbox' placeholder='enter place ...' type='text' value={inputValues} onChange={handleChange} />
         </div>

      <button onClick={handleSubmit} size="small" variant="contained" endIcon={<Cloud />} > Get Weather </button>

    </div>
  )
}

export default inputPage

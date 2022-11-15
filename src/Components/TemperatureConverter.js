import React from 'react'
import Temp from '../images/temp.webp';
import './temperature.css';

export default function TemperatureConverter() {

    const handleSubmit = () => {
        let entry = document.querySelector("#fah").value;
        let entry1= document.querySelector("#cel").value;
    
        if (entry !== "") {
          entry1= (parseInt(entry-32)*0.56);
        } else {
          entry=( parseInt(entry1*1.8)+32);
        };
        document.querySelector("#fah").value= parseInt(entry);
        document.querySelector("#cel").value= parseInt(entry1);
      
      
    }
      const handleClick = () => {
        document.querySelector("#fah").value = "";
        document.querySelector("#cel").value = "";
      }
    
      return (
        <div className='main_part'>
    
    
        
          
          
          <h2 >Temperature Converter</h2>
          <div className="input_section">
          <input type="number" id="fah" placeholder="Enter Fahrenheit"></input>
          
          <img id="pic_3"   src={Temp} alt='Temp_pic' />
          <input type="number" id="cel" placeholder="Enter Celsius"></input>
          </div>
           <div className='btn'>
          <button type='submit' onClick={handleSubmit} >Convert </button>
         
          <button type='reset' onClick={handleClick}>Reset</button>
          </div>
         
        </div>
    
      )
    }
    
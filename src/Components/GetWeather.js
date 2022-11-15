import React from 'react';
import weatherdetails from "../images/weatherdetails.png";
import './getweather.css';
import { useState,useEffect } from 'react';


export default function GetWeather() {
    
        const handleChange = (e) => {
            setSearch(e.target.value);
        }
    
        const [city, setCity] = useState(null)
        const [search, setSearch] = useState("")
    
        useEffect(() => {
            const fetchApi = async () => {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c008103c26d1f0975a83e220fc9ba86c`
                const response = await fetch(url);
                const resJson = await response.json();
                setCity(resJson.main);
            };
            fetchApi();
        }, [search])
        return (
            <div className='design'>
    
    
    
                <div className='left_portion'>
                    
                        <h2 id="left_heading">Let's find weather in my city</h2>
                        <img  id="pic_2"src={weatherdetails} alt="Dexter" />
                    
                   
                </div>
                <div  className='right_portion'>
                <input type="text" placeholder='Enter City' value={search} onChange={handleChange}/>
                {!city ? (
                    <h3 >No Data Found</h3>
                ) : (
                    <div className="banner">
                        <h2>Weather Details of City: {search},IN</h2>
                        <h2>Current Temperature: {city.temp} cel</h2>
                        <h2>Temperature Range: Min:{city.temp_min}cel || Max:{city.temp_max}cel</h2>
                        <h2>Humidity:{city.humidity}</h2>
                        </div>
                )}
                </div >
            </div>
        )
    }
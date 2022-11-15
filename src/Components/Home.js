import React from 'react'
import logo from '../images/logo.gif';
import "./Home.css";
import {Link,Routes,Route} from 'react-router-dom';
import GetWeather from '../Components/GetWeather';
import TemperatureConverter from '../Components/TemperatureConverter';
import Home1 from './Home1';



export default function Home() {
  return (
    <div>
      <nav >
        <div className='left-portion'>
          <a href='/home'>
        <img id="img_1"src={logo} alt="nav-pic" />
        </a>
        <h2>Weather Forecast App</h2>
        </div>
        <div className='right-portion'>
          <ul >
            <li>
              <Link to="/Home">Home</Link>
              </li>
            <li>
              <Link to="/GetWeather">GetWeather</Link>
              </li>
            <li>
              <Link to="/TemperatureConverter">TemperatureConverter</Link>
              </li>
          </ul>
        </div>
      </nav>
      

      <Routes>
      <Route path='/Home' element={<Home1/>}/>
      <Route path='/GetWeather' element={<GetWeather/>}/>
      <Route path='/TemperatureConverter' element={<TemperatureConverter/>}/>
      </Routes>

    </div>
  )
}

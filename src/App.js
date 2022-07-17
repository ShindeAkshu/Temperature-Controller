import React from 'react';
import './App.css';
import { useState } from 'react';


const App = () => {
  const[temperatureValue,setTemperatureValue] =useState(10);
  const[temperatureColor,setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    const newTemperature = temperatureValue + 1;
    if(newTemperature >= 20 ){
      setTemperatureColor('hot');
    }
    setTemperatureValue(newTemperature);

  };

  const decreaseTemperature = () =>{
    const newTemperature = temperatureValue -1;
    if(newTemperature <= 20){
      setTemperatureColor('cold');
    }
    setTemperatureValue(newTemperature);
  };

  return (
    <div><h1>Temperature Control</h1>
      <div className="app-container">
        <div className='temperature-display-container'>
          <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°c</div>
        </div>  
          <div className="button-container">
             <button onClick={() => increaseTemperature()}>+</button>
             <button onClick={() => decreaseTemperature()}>-</button>   
          </div>
      </div>
    </div>
      
  
    
  );
     
};

export default App;

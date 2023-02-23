import { createContext, useState } from "react";

export const AppContext = createContext();


export const AppProvider = ({children}) =>{
  const [dataLocation, setDataLocation] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  const [currentDataIcon, setCurrentDataIcon] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [dailyForecast , setDailyForecast] = useState([]);
  const [searchQuery, setSearchQuery] = useState('London');
  
  async function fetchData(searchQuery){
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '144a3cf0c0msh0c66d76d19b8f57p1949b4jsn0aa250a87484',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
    const dataLocation = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${searchQuery}&days=3`, options);
    const response = await dataLocation.json();
    setDataLocation(response.location);
    setCurrentData(response.current);
    setCurrentDataIcon(response.current.condition.text);
    setForecast(response.forecast.forecastday);
    setDailyForecast(response.forecast.forecastday[0].hour);
  }
      


    return <AppContext.Provider value={{dataLocation,fetchData ,currentData,forecast,searchQuery,setSearchQuery,dailyForecast,currentDataIcon}}>
             {children}
           </AppContext.Provider>
}
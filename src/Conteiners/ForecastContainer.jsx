import { useContext, useEffect } from "react";
import CardForecastComponent from "../Components/CardForecastComponent";
import { AppContext } from "../Context/appContext";

const ForecastContainer = () => {
  const { forecast, fetchData,searchQuery, dataLocation } = useContext(AppContext);
  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  return (
    <div className="container">
      {forecast.map((element, index) => {
        if(index!== 0){
          return (
            <span key={index}>
              <CardForecastComponent forecastSingle={element} dataLocation={dataLocation} />
            </span>
          );
        }
        
      })}
    </div>
  );
};

export default ForecastContainer;

import { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import CardPrincipal from "../Components/CardPrincipal";

const ConteinerToday=()=>{

    const { dataLocation , fetchData ,currentData,searchQuery,dailyForecast,currentDataIcon } = useContext(AppContext);

    useEffect(()=>{
        fetchData(searchQuery);
    },[searchQuery]);

    return(
        <CardPrincipal dataLocation={dataLocation} currentData={currentData} dailyForecast={dailyForecast} currentDataIcon={currentDataIcon}/>
    )
}

export default ConteinerToday;
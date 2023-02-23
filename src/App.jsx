import "./App.css";
import ForecastContainer from "./Conteiners/ForecastContainer";
import NavbarComponent from "./Components/NavbarComponent";
import { AppProvider } from "./Context/appContext";
import ConteinerToday from "./Conteiners/ConteinerToday";
import FooterComponent from "./Components/footerComponent";

function App() {
  return (
    <div className="App body--container">
      <AppProvider>
        <div className="navbar">
          <NavbarComponent />
        </div>
        <div className="forecastConteiner container">
          <ConteinerToday />
          <ForecastContainer />
        </div>
      </AppProvider>
      <FooterComponent />
    </div>
  );
}

export default App;

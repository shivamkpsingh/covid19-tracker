import "./App.css";
import DetailsContainer from "./DetailsContainer";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://api.covid19india.org/data.json");
      const newRes = await res.json();
      // console.log(newRes.statewise[0]);
      setData(newRes.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div className="app">
      <h1 className="app__heading">COVID-19 CORONA VIRUS TRACKER</h1>
      <div className="app__containerOne">
        <DetailsContainer para="OUR" heading="COUNTRY" details="INDIA" />
        <DetailsContainer
          para="TOTAL"
          heading="RECOVERED"
          details={data.recovered}
        />
        <DetailsContainer
          para="TOTAL"
          heading="CONFIRMED"
          details={data.confirmed}
        />
      </div>
      <div className="app__containerTwo">
        <DetailsContainer para="TOTAL" heading="DEATH" details={data.deaths} />
        <DetailsContainer para="TOTAL" heading="ACTIVE" details={data.active} />
        <DetailsContainer
          para="LAST"
          heading="UPDATED"
          details={data.lastupdatedtime}
        />
      </div>
    </div>
  );
}

export default App;

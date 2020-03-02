import React, { useEffect, useState } from "react";
import styles from "./Weather.module.css";

const Weather = () => {
  const appId = "6034a5a70da58436beeb640abe2838c6";
  const units = "metric";

  const [value, setValue] = useState([]);
  const [city, setCity] = useState("Minsk");
  const [cityCopy, setCityCopy] = useState("Minsk");

  function getDayOfWeek(date) {
    let day = new Date(date).getDay();
    switch (day) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        break;
    }
    return day;
  }

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${appId}&units=${units}`
    )
      .then(result => {
        return result.json();
      })
      .then(data => {
        setValue(data.list);
      })
      .catch(err => console.log(err));
  }, [city]);

  return (
    <div className={styles.cont}>
      <h1>Minsk</h1>
      {/* <input type='text'  onChange={(el)=>setCityCopy(el)}  />
      <button onClick={()=>setCity(cityCopy)}>Search</button>  */}

      {value.map(function(e) {
        if (e.dt_txt.indexOf("15:00") > 0) {
          return (
            <div className={styles.weatherCont}>
              <h2>{getDayOfWeek(e.dt_txt)}</h2>
              <p>{e.weather[0].description}</p>
              <p>{e.main.temp + "\u00b0"}C</p>
              <img
                alt=""
                src={
                  "http://openweathermap.org/img/wn/" +
                  e.weather[0].icon +
                  ".png"
                }
              />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Weather;

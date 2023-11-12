import React, { useEffect, useState } from "react";

import { apikey, citysearch, current, fiveDaysForecasts } from "./constants";
//home page
const Home = () => {

	//const values for fetch data from accuweather API
  const [city, setCity] = useState('Tel Aviv');
  const [details, setDetails] = useState({});
  const [weather, setWeather] = useState({});
  const [iconSrc, setIconSrc] = useState("");
  const [fiveDayForecast, setFiveDayForecast] = useState([]);
  const [favoriteCities, setFavoriteCities] = useState([]);
  const [favoritesScreen, setFavoritesScreen] = useState(false);

  //const values for json-server
  const [favorites, setFavorites] = useState([]);
  const [newId, setNewId] = useState("");
  const [newName, setNewName] = useState("");
  const [newCurrent, setNewCurrent] = useState("");
  const [newIconSrc, setNewIconSrc] = useState("");
  const searchDefaultCity = (cityName) => {
    fetch(`${citysearch}?apikey=${apikey}&q=${cityName}`)
      .then((res) => res.json())
      .then((result) => {
        setDetails(result[0]);

        fetch(`${current}${result[0].Key}?apikey=${apikey}`)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result[0]);
          setIconSrc(`/icons/${result[0].WeatherIcon}.png`);
          console.log(result[0].WeatherIcon);
          console.log(result[0]);
        })
        .catch((err) => {
          console.error(err);
        });

        // Fetch the 5-day forecast
      fetch(`${fiveDaysForecasts}${result[0].Key}?apikey=${apikey}&metric=true`)
      .then((res) => res.json())
      .then((result) => {
        setFiveDayForecast(result.DailyForecasts);
      })
      .catch((err) => {
        console.error(err);
      });    

      });

    };
  const search = (evt) => {
    if (evt.key === "Enter") {
      fetch(`${citysearch}?apikey=${apikey}&q=${city}`)
        .then((res) => res.json())
        .then((result) => {
          console.log(result[0].Key);
          setDetails(result[0]);
  
          fetch(`${current}${result[0].Key}?apikey=${apikey}`)
            .then((res) => res.json())
            .then((result) => {
              setWeather(result[0]);
              setIconSrc(`/icons/${result[0].WeatherIcon}.png`);
              console.log(result[0].WeatherIcon);
              console.log(result[0]);
            })
            .catch((err) => {
              console.error(err);
            });

            // Fetch the 5-day forecast
          fetch(`${fiveDaysForecasts}${result[0].Key}?apikey=${apikey}&metric=true`)
          .then((res) => res.json())
          .then((result) => {
            setFiveDayForecast(result.DailyForecasts);
          })
          .catch((err) => {
            console.error(err);
          });
      });
    }
  };

   // Function to format the date for display of 5-day forecast
   const formatDate = (date) => {
    const formattedDate = new Date(date);
    return formattedDate.toLocaleDateString('en-US', { weekday: 'long' });
  };

  const dateBuilder = (d) => {
            let days = [
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
            ];

        let day = days[d.getDay()];
        return `${day}`;
    };
    
    
 
 // Function to toggle a city in and out of favorites
 const toggleFavorite = () => {
  const index = favoriteCities.findIndex((city) => city.id === details.Key);

  if (index === -1) {
    setFavoriteCities([...favoriteCities, { 
      id: details.Key,
       name: details.LocalizedName,
        weather: weather
     
  }]);
 //add the favorite city to favorites server
  addFavorite();
  } else {
    const updatedFavorites = favoriteCities.filter((city) => city.id !== details.Key);
    setFavoriteCities(updatedFavorites);
     // Remove the favorite from the server
     removeFromFavoritesServer(city.id );
  }
};

//Function to remove city object from the favorites server
const removeFromFavoritesServer = async (id) => {
  try {
    const response = await fetch(`./data.json/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error removing from favorites:", error);
  }
};


  useEffect(() => {
      // Set default city (Tel Aviv) details and weather on initial load
    searchDefaultCity(city);


    fetch("http://localhost:3000/favoritesArry")
    .then(response => response.json())
    .then(json => setFavorites(json))

  }, []);
// Check if the current city is among favorites
const isFavorite = favoriteCities.some(city => city.id === details.Key);
  const addFavorite = () => {
     
    const name = details.LocalizedName;
    const current =(weather.Temperature.Metric.Value);
    const weatherstr=weather.WeatherText;
    const iconStr = `/icons/${weather.WeatherIcon}.png`;
    const obj = {
      id: details.Key+"",
      name: name+"",
      current: current+"",
      Weather:weatherstr+"",
      icon:iconStr,
      };
      
    setNewId(city.id);
    setNewName(details.LocalizedName);
    setNewCurrent(weather.Temperature);
    setNewIconSrc(iconStr);

    fetch("http://localhost:3000/favoritesArry")
    .then(response => response.json())
    .then(json => setFavorites(json))
      fetch(`http://localhost:3000/favoritesArry`, {
        method: "POST",
      body: JSON.stringify(obj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((err) => {
        console.error(err);
        });
  
    
  };
  
 return(
  <div className="Home">
  <div>
  <div class="add-to-fav">
<button type="button"   class="btn btn-outline-warning"  onClick={ toggleFavorite}>  {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}</button>
</div>

<main>
<div>
    <div className="current-day">
      {typeof details.Key != "undefined" ? (

                <div className="location">
                  <div className="cityname">{details.LocalizedName}                  
                </div>
                <div className="date">{dateBuilder(new Date())} </div>
                </div>

      ) : (" ")}
        {typeof weather.WeatherText != "undefined" ? (
          
              <div >
                <div >
                    {Math.round(weather.Temperature.Metric.Value)}°C
                </div>
                <div className="conditions">
                    {weather.WeatherText}
                </div>
                <div className="icon-box">
                    <img className="icon" src={iconSrc} alt="weathericon" />
                </div>
            
              </div>
      ) : (" ")}
    </div>
     <div className="top-box">
  <div className={typeof weather.WeatherText != "undefined" ? "box" : ""}>
   
    
      <div className="header"> Welcome to Weather Web</div>
     
        <div className="start">
        Check current weather of the chosen city</div>
    
    </div>
  </div>
  </div>
  <div className="search">
    <input
      className="search-field"
      placeholder="Enter city.."
      value={city}
      onChange={(e) => setCity(e.target.value)}
      onKeyPress={search}
    />
  </div>


  
             {/* Display the 5-day forecast */}
  <div className="forecast">
    
    {fiveDayForecast.map((day, index) => (
      <div key={index} className="forecast-item">
        <div>{formatDate(day.Date)}</div>
        <div className="temperature">
        <div>{Math.round(day.Temperature.Maximum.Value)}°C </div>
        <p>
              {weather.WeatherText}
        </p>
        </div>
        <div className="icon-box">
                <img className="icon" src={iconSrc} alt="weathericon" />
            </div> 
      </div>
    ))}
  </div>

  
</main>
</div>

</div>

);

};

export default Home;

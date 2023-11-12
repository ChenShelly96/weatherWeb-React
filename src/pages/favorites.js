/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import './fav.css';

const Favorites = () => {
  const [data , setData]=useState(null)

  // Fetch Function from the server of favorites cities
 
  useEffect(() => {
    setTimeout(() => {
        fetch("http://localhost:3000/favoritesArry")
            .then(res => {
                if (!res.ok) {
                    throw Error('Error fetching users data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
               
            })
            .catch(err => {
              
            });
    }, 1000);
}, ["http://localhost:3000/favoritesArry"]);
  
    return (
      <div className="favorite-screen">
         
        <main>
      
              {data? data.map(
                 
                  function(data){
                
                          return (
                          
                          
                          <div className="box-cards"> 
                                
                              <div className="favorite">
                                  <p>
                                 {data.name} 
                                  </p>
                            
                                <div>
                                  <p>
                                 {data.current}°C
                                  </p>
                                </div>
                                <div>
                                  <p>
                                 {data.weather}
                                  </p>
                                </div>
                                <p>
                                <img className="icon" src={data.icon} alt="Icon1"/>
                                </p>
                              </div>
                          </div>
                      
                          
                          
                    )
                   
                  }
                ):""
                    
              }
      
        </main>
      </div>
    );
};



export default Favorites;

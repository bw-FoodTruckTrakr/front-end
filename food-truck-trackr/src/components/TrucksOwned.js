import React, { useState, useEffect } from "react";

//import axios here
// import axios from "axios";

export default function TrucksOwned() {
  const [trucks, setTrucks] = useState([]);

  //How I would do this call. No token and no unit 3, so I can't get data back without an auth error

  // const getTrucks = () => {
  //axios.get("https://foodtrucktrackr7.herokuapp.com/trucks/owned")
  //     .then(res => setTrucks(res.data))
  //     .catch(err => debugger;)
  // };

  //useEffect(() => {
  //  getTrucks();
  // }, [])

  return (
    <div>
      {/* Would map over trucks array and feed this info as props into a styled card component that would render each truck's information*/}

      {/* trucks.map(truck => {
        return (
          <p>Name: {truck.name}</p>
          <p>Departure Time: {truck.departure}</p>
          <img src={truck.truckImage} />
          <p>Cuisine served: {truck.cuisine}</p>
          <p>Customer ratings:</p> {truck.ratings.map(rating => <span>{rating} </span>)}
          <p>Average rating: {truck.average}</p>
          )
      }) */}
    </div>
  );
}

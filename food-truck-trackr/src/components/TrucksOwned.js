import React, { useState, useEffect } from "react";

//import axios here
// import axios from "axios";

export default function TrucksOwned() {
  const [trucks, setTrucks] = useState([]);

  //How I would do this call. No token and no unit 3, so I can't get data back with an auth error.
  //Constructed dummy data to finish component

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
      <h1>working!</h1>
    </div>
  );
}

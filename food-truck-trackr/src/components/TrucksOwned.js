import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledButtons = styled.div`
  width: 100%;

  h1 {
    width: 100%;
    background-color: ${(props) => props.theme.button};
    font-size: 5rem;
    color: white;
    margin: 0;
    text-align: center;
    padding: 4%;
  }

  button {
    background-color: ${(props) => props.theme.button};
    color: white;
    border: none;
    margin: 1%;
    padding: 15%;
    cursor: pointer;
  }

  .buttons {
    display: flex;
    justify-content: center;
  }

  a {
    padding: 2%;
  }
`;

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
    <StyledButtons className="dash">
      <h1>Operator Dashboard</h1>
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
      <div className="buttons">
        <Link to="/addtruckform">
          <button>Add Truck</button>
        </Link>
        <Link to="/addtruckform">
          <button>Edit Truck</button>
        </Link>
        <a href="#">
          <button>Delete Truck</button>
        </a>
      </div>
    </StyledButtons>
  );
}

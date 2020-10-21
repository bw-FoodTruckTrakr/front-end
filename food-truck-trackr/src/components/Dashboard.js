import React from 'react'; 
import styled from 'styled-components'; 
import Logo from "../Logo/logo.png";

const StyledDashboard = styled.div`

& {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    width: 100%; 
    background: #f9ae2d

}
.title {
    display: flex; 
    justify-content: space-between; 
    align-items: center; 
    height: 25vh; 
    width: 100%
}

.logo {
  width: 15%; 
  border: none; 
  background: #f9ae2d; 
}



h1 {
    margin: 5%;
    font-size: 8rem;
    color: #002A29; 
    margin-right: 23%
}

.truck-container {
    display: flex; 
    justify-content: space-around; 
    align-items: center; 
    flex-wrap: wrap; 
    width: 100%;
    background: white; 
}

.truck {
    margin: .5%
}

.truck-image {
    width: 700px; 
    height: 600px; 
    object-fit: cover;
    border:2px solid white;
    -moz-box-shadow: 10px 10px 50px black; 
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
}

h2, p {
   text-align: center;  
}

h2 {
    font-size: 5rem;
    margin: 3%; 
}

p {
    font-size: 3rem;
    margin: 2%; 
}




`


const Dashboard = ({trucksList}) => {

    const renderedTruckList = trucksList.map(cur => {
        return (
            <div className="truck" key={cur.id}>
                <h2>{cur.name}</h2>
                <img className="truck-image" alt={cur.name} src={cur.imgUrl} /> 
                <p> Type: {cur.cuisineType}</p> 
                <p> Rating: {cur.customerRatingAvg}</p>
                <p>Location: {cur.currentLocation}</p>
                <hr></hr>
            </div>
        )
    })


    return (
        <StyledDashboard>
            <div className="title">
                <img className="logo" src={Logo} alt="truck logo" /> 
                <h1>Dashboard</h1>
                <div></div>
            </div>
            <div className="truck-container">
                {renderedTruckList}
            </div>
        </StyledDashboard>
    )
}

export default Dashboard; 
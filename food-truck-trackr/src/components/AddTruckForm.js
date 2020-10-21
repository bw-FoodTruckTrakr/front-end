import React, { useState, useEffect } from "react";
import styled from "styled-components";

//////styles////////
const StyledTruckForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    margin: 3%;
  }

  label {
    margin-bottom: 1%;
  }

  input {
    display: block;
    margin: 4%;
    border: none;
    background-color: ${(props) => props.theme.paleYellow};
    padding: 6%;
    border-bottom: 2px solid ${(props) => props.theme.grey};
  }

  button {
    padding: 0.5% 4%;
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.grey};
    border: none;
    margin: 2%;
  }

  img {
    margin: 3% 0;
  }
`;

////////////initial values/////////////
const initialFormValues = {
  truckImage: "",
  cuisine: "",
  ratings: [],
};

export default function AddTruckForm() {
  //////////set state///////////
  const [formValues, setFormValues] = useState(initialFormValues);
  const [customerRatings, setCustomerRatings] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [average, setAverage] = useState(0);

  //////////event handlers/////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTruck = {
      truckImage: formValues.truckImage.trim(),
      cuisine: formValues.cuisine.trim(),
      ratings: formValues.ratings,
      average: average,
    };

    setFormValues(initialFormValues);
    setCustomerRatings([]);
    setImageUrl("");
    setAverage(0);
  };

  const handleRatingsClick = () => {
    setCustomerRatings([...customerRatings, formValues.ratings]);
    setFormValues({ ...formValues, ratings: [] });
  };

  const handleImageClick = () => {
    setImageUrl(formValues.truckImage);
    setFormValues({ ...formValues, truckImage: "" });
  };

  useEffect(() => {
    if (customerRatings.length !== 0) {
      const arr2 = customerRatings.map((num) => Number(num));
      let ave = 0;

      for (let i = 0; i < arr2.length; i++) {
        ave += arr2[i];
      }

      setAverage((ave / arr2.length).toFixed(2));
    }
  }, [customerRatings]);

  return (
    <StyledTruckForm onSubmit={handleSubmit}>
      <h2>Add A Truck!</h2>
      <label>
        Add Truck Image
        <input
          type="text"
          name="truckImage"
          value={formValues.truckImage}
          placeholder="Add image URL here"
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleImageClick}>
        Add Truck Image
      </button>
      {imageUrl ? <img src={imageUrl} /> : null}
      <label>
        Cuisine Type
        <input
          type="text"
          name="cuisine"
          value={formValues.cuisine}
          placeholder="Add cuisine type"
          onChange={handleChange}
        />
      </label>
      <label>
        Add Ratings
        <input
          type="number"
          name="ratings"
          value={formValues.ratings}
          placeholder="Add numerical ratings"
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleRatingsClick}>
        Add Rating
      </button>

      {customerRatings.map((rating, idx) => {
        return <li key={idx}>{rating}</li>;
      })}

      <p>Average Rating: {average}</p>

      <button type="submit">Submit</button>
    </StyledTruckForm>
  );
}

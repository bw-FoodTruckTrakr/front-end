import React, { useState } from "react";
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

  input[type="text"] {
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

  //////////event handlers/////////
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    setCustomerRatings([]);
    setImageUrl("");
  };

  const handleRatingsClick = () => {
    setCustomerRatings([...customerRatings, formValues.ratings]);
    setFormValues({ ...formValues, ratings: [] });
  };

  const handleImageClick = () => {
    setImageUrl(formValues.truckImage);
    setFormValues({ ...formValues, truckImage: "" });
  };

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
          type="text"
          name="ratings"
          value={formValues.ratings}
          placeholder="Add ratings"
          onChange={handleChange}
        />
      </label>
      <button type="button" onClick={handleRatingsClick}>
        Add Rating
      </button>

      {customerRatings.map((rating) => {
        return <li>{rating}</li>;
      })}

      <button type="submit">Submit</button>
    </StyledTruckForm>
  );
}

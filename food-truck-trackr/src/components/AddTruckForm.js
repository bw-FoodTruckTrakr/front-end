import React from "react";
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

  .error {
    margin-bottom: 1%;
    color: red;
  }
`;

export default function AddTruckForm(props) {
  const {
    values,
    change,
    submit,
    errors,
    ratingsClick,
    customerRatings,
    average,
  } = props;

  return (
    <StyledTruckForm onSubmit={submit}>
      <h2>Add A Truck!</h2>
      <label>
        Truck Name
        <input
          type="text"
          name="name"
          value={values.name}
          placeholder="Add truck name"
          onChange={change}
        />
      </label>
      <div className="error">{errors.name}</div>
      <label>
        Add Truck Image
        <input
          type="text"
          name="truckImage"
          value={values.truckImage}
          placeholder="Add image URL here"
          onChange={change}
        />
      </label>
      {values.truckImage ? <img src={values.truckImage} /> : null}
      <label>
        Truck Departure Time
        <input
          type="text"
          name="departure"
          value={values.departure}
          placeholder="Add truck departure time"
          onChange={change}
        />
      </label>
      <div className="error">{errors.departure}</div>
      <label>
        Cuisine Type
        <input
          type="text"
          name="cuisine"
          value={values.cuisine}
          placeholder="Add cuisine type"
          onChange={change}
        />
      </label>
      <div className="error">{errors.cuisine}</div>
      <label>
        Add Ratings
        <input
          type="number"
          name="ratings"
          value={values.ratings}
          placeholder="Add numerical ratings"
          onChange={change}
        />
      </label>
      <button type="button" onClick={ratingsClick}>
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

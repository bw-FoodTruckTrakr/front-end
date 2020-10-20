import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

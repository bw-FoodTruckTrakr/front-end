import React, { useState, useEffect } from "react";
import AddTruckForm from "./AddTruckForm";
import * as yup from "yup";
import schema from "../marja-validation/addTruckSchema";

/////////////initial values//////////////
const initialFormValues = {
  name: "",
  truckImage: "",
  departure: "",
  cuisine: "",
  ratings: [],
};

const initialFormErrors = {
  name: "",
  departure: "",
  cuisine: "",
};

export default function AddTruck() {
  ///////////set states///////////////
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [customerRatings, setCustomerRatings] = useState([]);
  const [average, setAverage] = useState(0);
  const [disabled, setDisabled] = useState(true);

  ////////////event handlers////////////
  const handleChange = (e) => {
    const { name, value } = e.target;

    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTruck = {
      name: formValues.name.trim(),
      truckImage: formValues.truckImage.trim(),
      cuisine: formValues.cuisine.trim(),
      ratings: formValues.ratings,
      average: average,
    };

    setFormValues(initialFormValues);
    setFormErrors(initialFormErrors);
    setCustomerRatings([]);
    setAverage(0);
  };

  const handleRatingsClick = () => {
    setCustomerRatings([...customerRatings, formValues.ratings]);
    setFormValues({ ...formValues, ratings: [] });
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

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <AddTruckForm
      values={formValues}
      change={handleChange}
      submit={handleSubmit}
      errors={formErrors}
      ratingsClick={handleRatingsClick}
      customerRatings={customerRatings}
      average={average}
      disabled={disabled}
    />
  );
}

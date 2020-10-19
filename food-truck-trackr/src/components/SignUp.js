import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import img from "../marja-images/foodtrucktrackrlogo.png";
import * as yup from "yup";
import schema from "../validation/signUpSchema";

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  tos: "",
};

const initialDisabled = true;

export default function SignUp() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const valueToUse = type === "checkbox" ? checked : value;

    yup
      .reach(schema, name)
      .validate(valueToUse)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({ ...formValues, [name]: valueToUse });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues(initialFormValues);
    const newUser = {
      username: formValues.username.trim(),
      password: formValues.password,
      email: formValues.email.trim(),
      tos: formValues.tos,
    };
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  return (
    <div>
      <img src={img} />
      <Link to="#">Sign Up</Link>
      <Link to="#">Sign In</Link>
      <form onSubmit={handleSubmit}>
        <div className="errors">
          <div>{formErrors.username}</div>
          <div>{formErrors.password}</div>
          <div>{formErrors.email}</div>
          <div>{formErrors.tos}</div>
        </div>

        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formValues.username}
            onChange={handleChange}
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </label>

        <label>
          I agree to the{" "}
          <span className="bold underline">terms of service</span>
          terms of service:
          <input
            type="checkbox"
            name="tos"
            checked={formValues.tos}
            onChange={handleChange}
          />
        </label>

        <button className="submit" disabled={disabled}>
          Sign Up!
        </button>
      </form>
      <Link to="#">I'm already a member</Link>
      <Route path="/signin">{/* sign in page*/}</Route>
    </div>
  );
}

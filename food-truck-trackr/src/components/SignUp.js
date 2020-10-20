import React, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import img from "../Logo/logo.png";
import * as yup from "yup";
import schema from "../marja-validation/signUpSchema";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";

////////styles////////////
const StyledFormContainer = styled.div`
  text-align: center;

  img {
    display: block;
    margin: 0 auto;
  }

  .sign-in-btn {
    padding: 1%;
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 5px 0 0 5px;
    background-color: ${(props) => props.theme.paleYellow};
    color: ${(props) => props.theme.button};
    margin-bottom: 3%;

    &:hover {
      background-color: ${(props) => props.theme.button};
      color: white;
    }
  }

  .register-btn {
    padding: 1%;
    border: 1px solid ${(props) => props.theme.button};
    border-radius: 0 5px 5px 0;
    color: white;
    background-color: ${(props) => props.theme.button};
  }

  .member {
    color: ${(props) => props.theme.grey};
  }
`;

////////Initial Values////////////
const initialFormValues = {
  username: "",
  password: "",
  email: "",
  status: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  email: "",
  status: "",
  tos: "",
};

const initialDisabled = true;

/////////Start function///////////
export default function SignUp() {
  //////////set state/////////////
  const [formValues, setFormValues] = useState(initialFormValues);
  const [disabled, setDisabled] = useState(initialDisabled);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  ///////////event handlers////////////
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
      status: formValues.status,
      tos: formValues.tos,
    };
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  /////////////rendered//////////////
  return (
    <StyledFormContainer>
      <img src={img} />
      <Link to="#">
        <button class="sign-in-btn">Sign In</button>
      </Link>
      <Link to="#">
        <button class="register-btn">Register</button>
      </Link>
      <SignUpForm
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      <Link to="#">
        <p className="member">I'm already a member</p>
      </Link>
      <Route path="/signin">{/* sign in page*/}</Route>
    </StyledFormContainer>
  );
}

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img from "../Logo/logo.png";
import * as yup from "yup";
import schema from "../marja-validation/signUpSchema";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";

////////styles////////////
const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;

  .button-links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 2px solid ${(props) => props.theme.button};
    margin-bottom: 5%;
  }

  img {
    display: block;
    margin: 0 auto;
  }

  .sign-in-link {
    padding: 5%;
    border-right: 3px solid ${(props) => props.theme.button};
    &:hover {
      background-color: ${(props) => props.theme.button};
    }
  }

  .sign-in-btn {
    background-color: transparent;
    color: ${(props) => props.theme.button};
    border: none;
    &:hover {
      color: white;
    }
  }

  .register-btn {
    border: none;
    color: white;
    background-color: ${(props) => props.theme.button};
    padding: 13% 6%;
  }

  .member {
    color: ${(props) => props.theme.grey};
    text-decoration: underline;
    margin: 15% 0;
  }
`;

////////Initial Values////////////
const initialFormValues = {
  username: "",
  password: "",
  address: "",
  email: "",
  status: "",
  tos: false,
};

const initialFormErrors = {
  username: "",
  password: "",
  address: "",
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
      address: formValues.address.trim(),
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
      <div className="button-links">
        <Link to="/" className="sign-in-link">
          <button class="sign-in-btn">Sign In</button>
        </Link>
        <button class="register-btn">Register</button>
      </div>
      <SignUpForm
        values={formValues}
        change={handleChange}
        submit={handleSubmit}
        errors={formErrors}
        disabled={disabled}
      />
      <Link to="/">
        <p className="member">I'm already a member</p>
      </Link>
    </StyledFormContainer>
  );
}

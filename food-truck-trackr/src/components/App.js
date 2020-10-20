import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import * as yup from "yup";

const App = () => {
  const initalValues = {
    username: "",
    password: "",
  };

  const [values, setValues] = useState(initalValues);
  const [errors, setErrors] = useState({
    ...initalValues,
    username: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const validateChange = (e) => {
    e.persist();

    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setErrors({
          ...errors,
          [e.target.name]: "",
        })
      )
      .catch((error) => {
        setErrors({
          ...errors,
          [e.target.name]: error.message,
        });
      });
  };

  const onInputChange = (e) => {
    console.log(e.target.clientWidth);

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    validateChange(e);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

    setValues(initalValues);
  };

  let formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Please provide a username")
      .min(3, "Username should be longer than 2 characters")
      .strict(true)
      .trim("cannot include leading and trailing spaces"),

    password: yup
      .string()
      .required("Please provide a password")
      .min(8, "Password should be atleast 8 characters long")
      .strict(true)
      .trim("cannot include leading and trailing spaces")
      .matches(/^\S*$/, "cannot include leading and trailing spaces"),
  });

  useEffect(() => {
    formSchema.isValid(values).then((valid) => setButtonDisabled(!valid));
  }, [values, formSchema]);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <SignIn
            onInputChange={onInputChange}
            values={values}
            onFormSubmit={onFormSubmit}
            errors={errors}
            buttonDisabled={buttonDisabled}
          />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
};

export default App;

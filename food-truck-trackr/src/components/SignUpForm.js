import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    display: block;
    margin: 4%;
    border: none;
    background-color: ${(props) => props.theme.paleYellow};
    padding: 6%;
    border-bottom: 2px solid ${(props) => props.theme.grey};
  }

  label,
  p {
    color: ${(props) => props.theme.grey};
  }

  .tos-label {
    margin: 2% 0;
  }

  .caps {
    text-transform: uppercase;
  }

  .bold-underline {
    text-decoration: underline;
    font-weight: bold;
  }

  .submit:disabled {
    padding: 0.5% 4%;
    background-color: ${(props) => props.theme.grey};
    color: white;
  }

  .submit {
    padding: 0.5% 4%;
    background-color: ${(props) => props.theme.button};
    color: ${(props) => props.theme.grey};
    border: none;
  }

  .errors {
    color: red;
    margin-bottom: 1%;
  }
`;

export default function SignUpForm(props) {
  const { values, change, submit, errors, disabled } = props;

  return (
    <StyledForm onSubmit={submit}>
      <label className="caps">
        Username
        <input
          type="text"
          name="username"
          value={values.username}
          onChange={change}
          placeholder="Enter username here"
        />
      </label>
      <div className="errors">{errors.username}</div>

      <label className="caps">
        Password
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={change}
          placeholder="*******"
        />
      </label>
      <div className="errors">{errors.password}</div>

      <label className="caps">
        Email
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={change}
          placeholder="Enter email here"
        />
      </label>
      <div className="errors">{errors.email}</div>

      <p>I am...</p>

      <label>
        A Diner
        <input
          type="radio"
          name="status"
          value="diner"
          checked={values.status === "diner"}
          onChange={change}
        />
      </label>

      <label>
        An Operator
        <input
          type="radio"
          name="status"
          value="operator"
          checked={values.status === "operator"}
          onChange={change}
        />
      </label>
      <div className="errors">{errors.status}</div>

      <label className="tos-label">
        I agree to the <span className="bold-underline">terms of service</span>:
        <input
          type="checkbox"
          name="tos"
          checked={values.tos}
          onChange={change}
        />
      </label>
      <div className="errors">{errors.tos}</div>

      <button className="submit" disabled={disabled}>
        Sign Up!
      </button>
    </StyledForm>
  );
}

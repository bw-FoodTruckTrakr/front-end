import React from "react";
import styled from "styled-components";
import Logo from "../Logo/logo.png";
import { Link } from "react-router-dom";

const StyledSignIn = styled.div`
  & {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 80vh;
    border: 2px solid black;
    margin: 3% 0%;
    width: 50%;
  }

  // logo

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 70%;
  }

  // main form element

  .form {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    width: 30%;
  }

  label,
  .signin {
    margin: 10% 0%;
  }

  .signin {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 30%;
    width: 70%;
  }

  p {
    max-width: 179px;
    margin-top: 2%;
    color: red;
  }

  //top buttons

  .links {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    border: 2px solid #f99d2d;
    background: #fffcf9;
  }


  .top-btn button {
    background: red; 
    font-size: 2.419rem; 
    font-family: "Titillium Web", sans-serif;
    background: white;
    border: 1px solid #F99D2D;
    cursor: pointer;
    outline: none; 

  }

  .top-btn button:hover {
    background: #F99D2D; 
    color: white; 

  }

  .btn-link {
    margin-left: 15%;
    margin-right: 8%;
  }

  .active {
    color: white;
    background: #F99D2D; 
  }

  .bottom-anchor {
    color: #4c4c4c;
    border-bottom: 1px solid #4c4c4c;
  }

  // input styling

  h2 {
    margin-bottom: 3%;
  }

  input {
    background: #fde2c2;
    border: #fde2c2;
    border-bottom: 2px solid gray;
    outline: none;
    width: 100%;
  }



  #register:hover {
    background: #f99d2d;
    color: white;
  }

  //bottom button

  .bottom-btn {
    padding: 2.4%;
    width: 100%;
    margin-bottom: 10%;
    cursor: pointer;
    font-family: "Titillium Web", sans-serif;
    font-size: 2.2rem;
    outline: none; 
  }

  #test {
    width: 100%;  
  }

  label {
    width: 90%;
  }
`;

const SignIn = ({
  onInputChange,
  values,
  onFormSubmit,
  errors,
  buttonDisabled,
}) => {
  return (
    <StyledSignIn>
      <div className="logo">
        <img src={Logo} />
      </div>
      <div className="links">
        <Link to="/" className="top-btn">
          <button className="top-btn"
          type="submit" id="signin"
          >Sign In</button>
        </Link>

        <Link to="signup" className="top-btn">
          <button id="register">Register</button>
        </Link>
      
      </div>
      <form className="form" onSubmit={onFormSubmit}>
        <label>
          <h2>USERNAME</h2>
          <input
            type="text"
            name="username"
            onChange={onInputChange}
            value={values.username}
            placeholder="Enter username here"
          />
          {errors.username.length !== 0 && <p>{errors.username}</p>}
        </label>

        <label>
          <h2>PASSWORD</h2>
          <input
            type="password"
            name="password"
            onChange={onInputChange}
            value={values.password}
            placeholder="***************"
          />
          {errors.password.length !== 0 && <p>{errors.password}</p>}
        </label>

        <div className="signin">
          <Link to="dashboard" id="test">
            <button
            className={`bottom-btn ${buttonDisabled ? "" : "active"}`}
            type="submit"
            disabled={buttonDisabled}
            >
            Sign In!
            </button>
          </Link>
         <Link to="signup">
            <a className="bottom-anchor">
            Not a member yet?
            </a>
         </Link>
        </div>
      </form>
    </StyledSignIn>
  );
};

export default SignIn;


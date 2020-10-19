import React from 'react'; 
import styled from 'styled-components'; 
import Logo from '../Logo/logo.png'; 

const StyledSignIn = styled.div`

& {
    display: flex; 
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column; 
    height: 80vh; 
    background: lightblue;
    margin: 3% 0%; 
    width: 50%; 
}

.logo {
    display: flex; 
    justify-content: center; 
    align-items: center; 
}

img {
    width: 70%
}

.form {
    display: flex;
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column; 
}

label, .signin {
    margin: 10% 0%; 
}

.signin {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    margin-top: 30%
}

p {
    max-width: 179px; 
    margin-top: 2%; 
    color: red; 
}

`

const SignIn = ({onInputChange, values, onFormSubmit, errors, buttonDisabled}) => {


    return (
        <StyledSignIn>
            <div className="logo">
                <img src={Logo} /> 
            </div>
            <div className="links">
                <button type='submit' disabled={buttonDisabled}>Sign In</button>
                <button>Register</button>
            </div>
            <form className="form" onSubmit={onFormSubmit}>
                <label>
                    <h2>USERNAME</h2>
                    <input type="text" name="username" onChange={onInputChange} value={values.username} /> 
                    {errors.username.length !== 0 && <p>{errors.username}</p>}
                </label>
                
                <label>
                    <h2>PASSWORD</h2>
                    <input type="password" name="password" onChange={onInputChange} value={values.password} />
                    {errors.password.length !== 0 && <p>{errors.password}</p>} 
                
                </label>

                <div className="signin">
                    <button type="submit" disabled={buttonDisabled}>Sign In!</button>
                    <a href="#">Not a member yet?</a>
                </div>
            </form>
            
        </StyledSignIn>
    )
}

export default SignIn; 
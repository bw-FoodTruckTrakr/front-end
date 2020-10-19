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
    width: 70%
}

// main form element

.form {
    display: flex;
    justify-content: space-evenly; 
    align-items: center; 
    flex-direction: column; 
    width: 30%
}

label, .signin {
    margin: 10% 0%; 
}

.signin {
    display: flex; 
    justify-content: center; 
    align-items: center; 
    flex-direction: column;
    margin-top: 30%;
    width: 70% 
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
    border: 2px solid #F99D2D; 
    background: #fffcf9 
    
}

.top-btns {
    padding: 5%; 
    width: 100%;
    color: #F99D2D;
    border: none; 
    cursor: pointer;
    font-family: 'Titillium Web', sans-serif;
    background: white;
}

.active {
    color: white; 
    background: #F99D2D
}

a {
    color: #4c4c4c 
}





// input styling 

h2 {
    margin-bottom: 3%; 
    margin-left: 3%; 
}


input {
    background: #fde2c2; 
    border: #fde2c2;
    border-bottom: 2px solid gray; 
    outline: none; 
}

#register:hover {
    background: #F99D2D;
    color: white; 
}



//bottom button 

.bottom-btn {

    padding: 5%; 
    width: 100%; 
    margin-bottom: 10%; 
    cursor: pointer;
    font-family: 'Titillium Web', sans-serif;


}
`

const SignIn = ({onInputChange, values, onFormSubmit, errors, buttonDisabled}) => {


    return (
        <StyledSignIn>
            <div className="logo">
                <img src={Logo} /> 
            </div>
            <div className="links">
                <button className={`top-btns ${buttonDisabled ? '' : 'active'}`} type='submit' disabled={buttonDisabled}>Sign In</button>
                <button className="top-btns" id='register'>Register</button>
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
                    <button className={`bottom-btn ${buttonDisabled ? '' : 'active'}`} type="submit" disabled={buttonDisabled}>Sign In!</button>
                    <a href="#">Not a member yet?</a>
                </div>
            </form>
            
        </StyledSignIn>
    )
}

export default SignIn; 
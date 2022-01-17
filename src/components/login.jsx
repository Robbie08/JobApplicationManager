import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { style } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';
import { useDispatch } from 'react-redux';
import * as ActionsCreators from '../actions/Actions';


function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    async function loginUser(){
        console.log(`Email: ${email} \nPassword: ${password}`);

        if(email === null || email.length === 0 || email === ''){
            setError("Email field is empty");
        }
        else if(password === null || password.length === 0 || password === ''){
            setError("Password field is empty");
        }else{
            try{
                await signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    console.log(user);
                    // dispatch our action to update the user info
                    let loginStatus = true;
                    let userData = {
                        email,
                        loginStatus,
                        user
                    }
                    dispatch(ActionsCreators.postUserData(userData));
                    navigate("/home");
                }).catch((error) => {
                    setError("Error with loging credentials!");
                    console.log(error);
                }) 
            }catch(error){
                console.log(error);
            }
        }   
    }

    function register(){
        console.log("Register button was clicked");
        navigate("/register");
    }

    return(
        <div style={{textAlign:'center'}}>
            <Container maxWidth="sm" >
                <h1>Login</h1>
                <div className='userInput' style={style.UserInput}>
                    <TextField id="outlined-basic" label="email" variant="outlined" onChange={iEmail => setEmail(iEmail.target.value)} style={style.Input}/>
                    <br></br>
                    <TextField id="outlined-basic" type="password" label="password" onChange={iPassword => setPassword(iPassword.target.value)} variant="outlined" style={style.Input} />  
                </div>
                <div className='buttons' style={style.Buttons}>
                    <Button variant="contained" style={style.Button} onClick={loginUser} >Login</Button>
                    <br></br>
                    <Button variant="outlined"  style={style.Button} onClick={register} >Register</Button>
                </div>
                <br></br>

                <h4>{error}</h4>
            </Container>
        </div>
    );
}

style.Button = {
    marginTop:10,
    width: '10rem'
}

style.Input ={
    marginTop:10,
    width: '15rem'
}

style.Buttons ={
    marginTop:10,
}

style.UserInput ={
    marginTop:10,
}
export default Login;
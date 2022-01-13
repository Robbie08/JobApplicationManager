import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { style } from '@mui/system';



function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function loginUser(){
        console.log(`Email: ${email} \nPassword: ${password}`);
    }

    function register(){
        console.log("Register button was clicked")
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
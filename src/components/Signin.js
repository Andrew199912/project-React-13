import React, { useState } from 'react';
import swal from 'sweetalert';
import '../css/Signin.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';

async function login(credenciales){
    return fetch('https://646e5db89c677e23218b94aa.mockapi.io/api/v1/Usuarios',{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(credenciales)

    })
    .then(data => data.json())
}

function Signin() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submit = async e => {
        e.preventDefault();
        const response = await login({
            username,
            password
        });
        if(response.id!==0){
            swal("Success", response.username, "success", {
                buttons: false,
                timer: 2000,
            })
            .then((value) => {

                localStorage.setItem('id', response['id']);
                localStorage.setItem("username", JSON.stringify(response['username']));
                localStorage.setItem("nombre", JSON.stringify(response['nombre']));
                localStorage.setItem("apellido", JSON.stringify(response['apellido']));
                localStorage.setItem("avatar", JSON.stringify(response['avatar']));
                window.location.href= "/profile";
            });
        }else{
            swal("Failed", response.username, "error");
        }
    }
    
    return (
        <Grid container className='root'>
            <CssBaseline />
            <Grid item xs={false} md={7} className='image' />
            <Grid item xs={12} md={5} component={Paper} elevation={6} square>
                <div className='paper'>
                        <VideogameAssetIcon className='icon' color="secondary" sx={{ fontSize: 50 }}/>
                    <Typography component="h1" variant="h5">
                            All your games in one space! <p>Log-in</p>
                    </Typography>
                    
                    <form className='form' noValidate onSubmit={submit}>
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            name="email"
                            label="Email/user"
                            onChange={e => setUsername(e.target.value)}
                        />
                        <TextField 
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            type="password"
                            id="password"
                            name="password"
                            label="Contraseña"
                            onChange={e => setPassword(e.target.value)}
                        />  
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className='submit'
                        >
                            Start now
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}


export default Signin;
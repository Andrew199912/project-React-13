import React from 'react'
import '../css/Profile.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import App from './App2';




function Profile(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const username = JSON.parse(localStorage.getItem('username'));
    const avatar = JSON.parse(localStorage.getItem('avatar'));
    const nombre = JSON.parse(localStorage.getItem('nombre'));

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem("id");
        localStorage.removeItem("username");
        localStorage.removeItem("nombre");
        localStorage.removeItem("apellido");
        localStorage.removeItem("avatar");

        window.location.href ="/";

    };
    
    return (
        <div className='root1'>
            <AppBar position='static' color="secondary">
                <Toolbar>
                    <Typography variant="h6" className='title'>
                        User: {username}
                    </Typography>
                    <div>
                        <IconButton onClick={handleMenu} color="inherit">
                            <Avatar src={avatar}/>
                        </IconButton>
                        <Menu 
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleLogout}> Logout </MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>

                <Card className='root2'sx={{ maxWidth: 'cover' }}>
                <CardContent>
                    <Avatar src={avatar} className='large'/>
                    <Typography variant="h5" className='title2' component="div">
                        Wellcome {nombre}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Find your favorite video games in the following section,
                    follow up and find out to which genre they belong.
                    </Typography>
                </CardContent>
                </Card>

            <App/>
        </div>
    )
}

export default Profile;
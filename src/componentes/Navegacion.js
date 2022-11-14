import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from "../assent/logo1.jpg";
import { ShoppingCart } from '@mui/icons-material';
import { Badge } from '@mui/material';


export default function Navegacion() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}          
            >       
            <img src={logo} width="100" height="100"/>

          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tienda Compulago
          </Typography>
          
          <Typography
            variant="h6"
            color="textPrimary" component= "p"
          >
            Hello Guest
          </Typography>

          <IconButton>
          <div className='classes.button'>
            <button variant="outlined">
                <strong>Registrarse</strong>
            </button>            
          </div>
          </IconButton>
          <Button color="inherit">Login</Button>
          
          <IconButton>
           <Badge badgeContent={2} color="secondary">
            <ShoppingCart>
              fontSize='large'
              color='primary'
            </ShoppingCart>
            </Badge>             
         </IconButton>  

        </Toolbar>
      </AppBar>
    </Box>
  );
}

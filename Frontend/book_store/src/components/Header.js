import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {NavLink} from 'react-router-dom';

const Header = () => {
  const [value,setValue] = useState(0);
  return (
    <div>
        <AppBar sx={{backgroundColor:'black'}} position='sticky'>
            <Toolbar>
               <Typography><MenuBookIcon/>Book Store</Typography>
               <Tabs sx={{ml:"auto"}} textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                <Tab LinkComponent={NavLink} to="/" label="Home"/>
                <Tab LinkComponent={NavLink} to="/add" label="Add Product"/>
                <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                <Tab LinkComponent={NavLink} to="/about" label="About Us"/>
               </Tabs>
            </Toolbar>
            
        </AppBar>
    </div>
  )
}

export default Header

//sx use for add css
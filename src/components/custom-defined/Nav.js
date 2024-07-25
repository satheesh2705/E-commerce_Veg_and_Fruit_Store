import React from 'react'
import {  Box, List, ListItemText, ListItemButton } from '@mui/material'

const Nav = () => {

const listStyle = {
    display:'flex',
    justifyContent:'space-between',
    width:"30%",
    height:"40px"   
    }
    const listItemButtonStyle = {"&:hover":{color:"green"},textTransform:'capitalize'}


  return (
    <Box align="center" id='nav'  >
        <List style={listStyle}>
        <ListItemButton component="a" href="#simple-list" >
          <ListItemText primary="Home" sx={listItemButtonStyle} />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Shop" sx={listItemButtonStyle} />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Blog" sx={listItemButtonStyle} />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="About" sx={listItemButtonStyle} />
        </ListItemButton>
        <ListItemButton component="a" href="#simple-list">
          <ListItemText primary="Contact" sx={listItemButtonStyle} />
        </ListItemButton>
        </List>
    </Box>
  )
}

export default Nav

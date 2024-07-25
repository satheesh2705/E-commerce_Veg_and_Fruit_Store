import { Divider, Container, Box } from "@mui/material";
import React from "react";
import SearchBar from "../custom-defined/SearchBar";
import "../../assets/style/header.css";
import Nav from "../custom-defined/Nav";
const Header = ({productDetails}) => {
  return (
    <Box>
      <Container  maxWidth={"md"}>
        <SearchBar 
          productDetails={productDetails}
        />
      </Container>  
      <Divider />
      <Nav />
      <Box className='Catagories'>
      </Box>
    </Box>
  );
};

export default Header;

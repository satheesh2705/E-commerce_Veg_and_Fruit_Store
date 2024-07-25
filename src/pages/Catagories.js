import { Stack, Container, Box, Typography } from "@mui/material";
import ProductDetails from "../components/custom-defined/ProductDetails";
import ProductList from "../components/custom-defined/ProductList";
import React from 'react'
const Catagories = ({ productDetails, setProductDetails, addProductToCart}) => {

  const containerStyle = {
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: "2%",
  };  


  return (
    <Box>
       
      <Container maxWidth={"lg"} style={containerStyle}>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Box flex={1.13}>
          <ProductDetails productDetails={productDetails} />
        </Box>
        <Box flex={3}>
          {productDetails.length ? (
            <ProductList
              productDetails={productDetails}
              addProductToCart={addProductToCart}
              
            />
          ) : (
            <Typography> No Product </Typography>
          )}
        </Box>
      </Stack>
    </Container>
    </Box>
  )
}

export default Catagories

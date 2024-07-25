import { Box, Grid } from "@mui/material";
import React from "react";
import ProductCard from "./ProductCard";
import ProductFilter from "./ProductFilter";
const ProductList = ({ productDetails,addProductToCart }) => {
  const boxStyle = { display: "flex", flexDirection: "column" };

  return (
    <Box sx={boxStyle}>
      <Box>
        <ProductFilter />
      </Box>

      <Box flex={3}>
        <Grid
          container
          flexDirection="row"
          justifyContent="start"
          alignItems="center"
          spacing={3}
        >
          {productDetails.map((productDetail) => (
            <ProductCard 
            productDetail={productDetail}
            addProductToCart={addProductToCart}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductList;

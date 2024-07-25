import React from "react";
import { Link} from 'react-router-dom';
import {
  Box,
  Typography,
  Avatar,
  IconButton,
  Button,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CartProductCount = ({
  incrementCount,
  decrementCount,
  productDetails,
  updateCart
}) => {
 
  const cartAddedDetail = productDetails.filter(productDetail => productDetail.cartAdded) 

  const buttonStyle = {
    width: "140px",
    "&:hover": { color: "green", backgroundColor: " #dddfdd8e" },
    backgroundColor: "white",
    color: "black",
    border: 1,
    textTransform: "capitalize"
  };

  const coupenButtonStyle = {
    height: "55px",
    width: "210px",
    backgroundColor: "green",
    color: "white",
    fontWeight: 500,
    "&:hover": { backgroundColor: "green", fontWeight: 900 },
    ml: "20px",
  };

  return (
    <Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Sub Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
           {cartAddedDetail.length ?(
            cartAddedDetail.map( (productDetail) =>(
              <TableRow sx={{ mt: "15px", mb: "15px" }}>
              <TableCell component="th" scope="row">
                <Box display="flex" alignItems="center" width="fit-content">
                  <Avatar src={productDetail.productImage} alt="Image Name" sx={{ marginRight: 2 }} />
                  <Typography variant="body1">{productDetail.productName}</Typography>
                </Box>
              </TableCell>
              <TableCell>{productDetail.productRate}</TableCell>
              <TableCell>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width={120}
                >
                  {/* (productDetail.id) */}
                  <IconButton aria-label="minus" onClick={() => incrementCount(productDetail.id)}>
                    <AddIcon />
                  </IconButton>
                  <Typography>{productDetail.productCount}</Typography>
                  <IconButton aria-label="plus" onClick={() => decrementCount(productDetail.id)}>
                    <RemoveIcon />
                  </IconButton>
                </Box>
              </TableCell>
              <TableCell >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrencyRupeeIcon fontSize="25px" />
                  <Typography>{productDetail.productSubTotal}</Typography>
                </Box>
              </TableCell>
            </TableRow>
            ))):(
              <TableRow>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell align="start" > <Typography variant="h6" > Your Cart Is Empty </Typography> </TableCell>
              <TableCell></TableCell>
            </TableRow>
          )
           }
          </TableBody>
        </Table>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          padding={1} // Add some padding
        >
          <Button variant="contained" sx={buttonStyle}>
           <Link to='catagories' id="returnToShop">
            Return to Shop
           </Link>
          </Button>
          <Button variant="contained" sx={buttonStyle} onClick={updateCart}>
            Update Cart
          </Button>
        </Box>
      </TableContainer>
      <Box sx={{ display: "flex", alignItems: "center", mt: "50px" }}>
        <TextField label="Coupen Code" size="medium" variant="outlined" />
        <Button sx={coupenButtonStyle}>Apply Coupen</Button>
      </Box>
    </Box>
  );
};

export default CartProductCount;

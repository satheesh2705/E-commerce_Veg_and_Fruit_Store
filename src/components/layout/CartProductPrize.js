import React from 'react'
import { Box, Button, Divider, Paper, Typography } from '@mui/material'
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const CartProductPrize = ({ productDetails,bilBox }) => {

  const boxStyle = { 
    display:"flex", 
    alignItems:"center",
    justifyContent:"space-between"
  }

  const innerBoxStyle ={
    display:"flex", 
    alignItems:"center",
  }

  const mainBoxStyle ={
    height:'250px',
    display:"flex",
    flexDirection:'column', 
    justifyContent:"space-between",
    padding:'10px 20px 20px 20px',
    border:'1px green solid',
    textTransform: 'capitalize'
  }

  const buttonStyle = {
    height:'45px',
    width:'200px',
    backgroundColor:'green',
    color:'white',
    fontWeight: 500,
    "&:hover":{backgroundColor:'green',fontWeight: 900}
  }
  //    const totalPrice = products.reduce((accumulator, product) => {
  //   return accumulator + product.price;
  // }, 0);


    //  let cartAddedDetails = productDetails.reduce((accumulator, productDetail) => {
    //     return accumulator + productDetail.subTotal
    //  },0
    // )

  return (
   bilBox.map( (product) =>
    <Box sx={mainBoxStyle} component={Paper}>
   <Typography variant='h6'> Cart Total </Typography>
   <Box sx={boxStyle}>
   <Typography> Subtotal </Typography>
     <Box sx={innerBoxStyle}>
         <CurrencyRupeeIcon fontSize='17px'/>
         {product.subTotal}
     </Box>
   </Box>
   <Divider />
  <Box sx={boxStyle}> 
   <Typography> Shopping </Typography>
     <Box sx={innerBoxStyle} >
         <CurrencyRupeeIcon  fontSize='17px'/>
         <Typography variant='p'> {product.shippingCost} </Typography>
     </Box>
   </Box>
   <Divider />
   <Box sx={boxStyle}> 
   <Typography variant='h6'> Total </Typography>
     <Box sx={innerBoxStyle} >
         <CurrencyRupeeIcon />
         <Typography variant='h6'> {product.totalCost} </Typography>
     </Box>
   </Box>
   <Box sx={{ display:"flex",alignItems:"center",justifyContent:'center'}}>
     <Button sx={buttonStyle}>
       Proceed To Pay
     </Button>
   </Box>
</Box>
   )
  )
}

export default CartProductPrize

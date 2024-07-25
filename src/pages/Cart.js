// import React, { useState } from 'react'
import { Box, Container, Stack } from '@mui/material'
import CartProductCount from '../components/layout/CartProductCount'
import CartProductPrize from '../components/layout/CartProductPrize'


const Cart = ( { incrementCount, decrementCount, productDetails,updateCart, bilBox } ) => {

  return (
    <Container maxWidth="lg"  sx={{mt:'30px',mb:'40px'}}>
       <Stack direction="row" spacing={2} justifyContent="space-between">
       <Box flex={2}>
          <CartProductCount
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            productDetails={productDetails}
            updateCart={updateCart}
          />
        </Box>
        <Box flex={0.81}>
          <CartProductPrize
            productDetails={productDetails}
            bilBox={bilBox}
          />
        </Box>
       </Stack>
    </Container>
  )
}

export default Cart

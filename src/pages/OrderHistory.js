import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import OrderHistoryTable from '../components/custom-defined/OrderHistoryTable'
import Sidebar from '../components/custom-defined/Sidebar'

const OrderHistory = () => {
  return (
   <Container maxWidth='lg' sx={{mt:'2%'}} >
    <Stack direction="row" spacing={1} justifyContent="space-between" alignItems='center'>
    <Box flex={1}>
        <Sidebar />
        </Box>
        <Box flex={2.5} >
            <OrderHistoryTable />
        </Box>
    </Stack>
   </Container>
  )
}

export default OrderHistory

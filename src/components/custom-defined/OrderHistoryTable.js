import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Stack
} from "@mui/material";
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Pagination from '@mui/material/Pagination';


    const tableHeadStyle = { 
        backgroundColor:' #dddfdd8e',
    }
    const rowStyle = {'&:hover':{backgroundColor:'#dddfdd8e'}}
    const headingStyle = {border: 0,fontSize:'15px',fontWeight: '600',height:'20'}
    const orderDetailStyle = {fontSize:'13px',color:'green',cursor:'pointer'}
    const orderIdStyle = {fontSize:'13px',cursor:'pointer'}   

const OrderHistoryTable = () => {

    const orderHistory = [
        {
            orderId:'7129',
            date:'15 / jul / 2024',
            total:'6237',
            status:'Complete'
        },
        {
            orderId:'7130',
            date:'16 / jul / 2024',
            total:'1237',
            status:'Complete'
        },{
            orderId:'7129',
            date:'15 / jul / 2024',
            total:'6237',
            status:'Complete'
        },
        {
            orderId:'7130',
            date:'16 / jul / 2024',
            total:'1237',
            status:'Complete'
        }
    ]

  return (
    <Box sx={{
        border: '1px solid', 
        borderColor: '#21222186', 
        borderRadius: 1, 
        pt:1
        }}>
        <Typography variant="h5" component='p'sx={{mb:'10px',ml:'10px'}}  >Order History</Typography>
      <TableContainer component="paper"  >
        <Table>
          <TableHead style={tableHeadStyle}>
            <TableRow id='orderHistoryRow'>
              <TableCell sx={headingStyle}  >ORDER ID</TableCell>
              <TableCell sx={headingStyle} >DATE</TableCell>
              <TableCell sx={headingStyle} >TOTAL</TableCell>
              <TableCell sx={headingStyle} >STATUS</TableCell>
              <TableCell> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          
           {

            orderHistory.map((product) =>(
                <TableRow id='orderHistoryRow' sx={rowStyle} >
                <TableCell sx={orderIdStyle}>#{product.orderId}</TableCell>
                <TableCell sx={orderIdStyle}>{product.date}</TableCell>
                <TableCell sx={orderIdStyle}>{product.total}</TableCell>
                <TableCell sx={orderIdStyle} >{product.status}</TableCell>
                <TableCell style={orderDetailStyle}> View Detail </TableCell>
              </TableRow>
            ))

           }
            
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{mt:'10px',mb:'10px  ',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}}>
      <Stack spacing={2}>
      
      <Pagination count={6} defaultPage={1} siblingCount={0} size="small" color="primary" />
    </Stack>
      </Box>
    </Box>
  );
};

export default OrderHistoryTable;

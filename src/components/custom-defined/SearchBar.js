import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Badge,
  Typography,
  ButtonGroup,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link} from 'react-router-dom';

const NavBar = ({ productDetails }) => {
  const boxStyle = {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const textFieldStyle = { width: "300px" };
  const cartIconStyle  = { fontSize: "lorge", fontWeight: "100"} 

  const cartAddedDetail = productDetails.filter(productDetail => productDetail.cartAdded) 
  
  return (
    <Box className="SearchBar" sx={boxStyle}>
      <Box margin="2px">
        <ButtonGroup >
          <TextField
            placeholder="Search"
            variant="outlined"
            color="primary"
            size="small"
            style={textFieldStyle}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{
              borderTopRightRadius: "0px",
              borderBottomRightRadius: "0px",
            }}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "primary.main",
              color: "white",
              height: "39px",
              borderTopRightRadius: "8px",
              borderBottomRightRadius: "8px",
              borderTopLeftRadius: "0px",
              borderBottomLeftRadius: "0px",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
          >
            Search
          </Button>
        </ButtonGroup>
      </Box>
      <Box className="ShoppingCartBox">
        <FavoriteBorderIcon sx={cartIconStyle} />
        <Typography
          variant="p"
          color="grey"
        >
          |
        </Typography>
        <Badge badgeContent={cartAddedDetail.length} color="primary">
          <Link to='cart'>
          <LocalMallOutlinedIcon
            sx={cartIconStyle}
          />
          </Link>
        
        </Badge>
        <Box>
         <Link to='orderHistory'>
         <Typography
            variant="p"
            color="initial"
            sx={{ fontSize: "11.5px", pl: "15px", width: "100px" }}
          >
            Shopping&nbsp;cart:
          </Typography>
         </Link>
          <br />
          <Typography
            variant="p"
            color="initial"
            sx={{ pl: "15px", width: "100px", fontWeight: "600" }}
          >
            {
              <CurrencyRupeeIcon
                sx={{ fontSize: "11.5px", fontWeight: "600" }}
              />
            }
            57.00
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;

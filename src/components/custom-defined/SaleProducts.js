import React from "react";
// import img4 from '../../assets/images/img4.png'
// import img4 from '../../assets/images/img1.png'
// import img2 from "../../assets/images/img3.png";
import {
  Box,
  Typography,
  CardContent,
  CardActionArea,
  CardMedia,
  Card,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const SaleProducts = ({ productDetail }) => {
  const saleProductStyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const productNameStyle = {
    fontSize: "12px",
    marginBottom: "0",
    width: "fitContant",
  };
  const productRatingStyle = { fontSize: "13px", size: "small" };
  const productPriceStyle = {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    marginTop: "0px",
    marginBottom: "0px",
  };

  const cardContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };
  const cardStyle = {
    height: "75px",
    width:'100%',
    backgroundColor: " #f5f0f04d",
    marginBottom: "10px",
    "&:hover": { border: 1 },
    // display:'flex',
    // flexDirection:"row",
    // justifyContent:"center",
    // alignItems: "center"
  };

  return (
    <Card sx={cardStyle}>
      <CardActionArea sx={saleProductStyle}>
        <CardMedia
          component="img"
          sx={{height:'50px',width:'80px'}}
          image={productDetail.productImage}
          alt="green iguana"
        />
        <CardContent sx={cardContentStyle}>
          <Box sx={{ height: "40px", direction: "column" }}>
            <Typography variant="caption" sx={productNameStyle}>
              Big Potatp
            </Typography>
            <Typography variant="h1" component="p" sx={productPriceStyle}>
              <CurrencyRupeeIcon fontSize="5px" /> 27.0
            </Typography>
            <Rating
              name="read-only"
              sx={productRatingStyle}
              value={5}
              readOnly
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SaleProducts;

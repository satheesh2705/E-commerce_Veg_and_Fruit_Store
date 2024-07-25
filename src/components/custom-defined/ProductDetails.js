import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import img5 from "../../assets/images/img5.png";
import {
  Box,
  Checkbox,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  // FormLabel,
  Radio,
  RadioGroup,
  Slider,
  Typography,
  Chip,
  Collapse,
  CardActionArea,
  CardMedia,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SaleProducts from "./SaleProducts";

const ProductDetails = ({ productDetails }) => {
  const [openTags, setOpenTags] = useState();
  const [openRating, setRating] = useState();
  const [openAllCatagories, setAllCatagories] = useState();
  const [openFilterPrice, setFilterPrice] = useState();

  const chips = [
    "Healthy",
    "Low Fat",
    "Veg",
    "Kid Foods",
    "Breakfast",
    "all",
    "Vitamins",
    "Bread",
    "Meat",
    "Snacks",
    "Tiffin",
    "Lunch",
    "Dinner",
    "Fruit",
  ];

  const fiterButtonStyle = {
    background: "#00B207",
    color: "white",
    borderRadius: "25px",
    height: "40px",
    width: "100px",
    marginBottom: "20px",
    "&:hover":{backgroundColor:"#00B207",fontSize:'16px'}
  };

  const catagoriesStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    mt: 2,
    fontSize: "20px",
  };

  const catagoryBoxStyle = {
    width: "248px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
  };

  const filterPrice = {
    display: "flex",
    alignItems: "center",
  };

  const ruppeIconStyle = {
    fontSize: "small",
    pr: "5px",
    pl: "5px",
  };

  const radioButtonStyle = { color: "black" };

  const topThree = productDetails.slice(0,4);

  return (
    <Box sx={{ marginRight: "4%", padding: "5%" }}>
      <Box>
        <Button sx={fiterButtonStyle}> Filter </Button>
      </Box>

      <FormControl>
        <Box
          sx={catagoryBoxStyle}
          onClick={() => setAllCatagories(!openAllCatagories)}
        >
          <Typography variant="body1" color="initial" sx={catagoriesStyle}>
            All Catagories
          </Typography>
          <Typography sx={catagoriesStyle}>
            {openAllCatagories ? (
              <KeyboardArrowUpIcon sx={{ ml: 1 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Box>
        <Collapse in={openAllCatagories} timeout="auto" unmountOnExit>
          <RadioGroup>
            <FormControlLabel
              value="a"
              control={<Radio size="small" sx={radioButtonStyle} />}
              label="Fruits"
            />
            <FormControlLabel
              value="b"
              control={<Radio size="small" sx={radioButtonStyle} />}
              label="Vegetables"
            />
            <FormControlLabel
              value="c"
              control={<Radio size="small" sx={radioButtonStyle} />}
              label="Cooking"
            />
          </RadioGroup>
        </Collapse>
      </FormControl>

      <Divider />

      <Box sx={{ marginBottom: "15px" }}>
        <Box
          sx={catagoryBoxStyle}
          onClick={() => setFilterPrice(!openFilterPrice)}
        >
          <Typography variant="body1" color="initial" sx={catagoriesStyle}>
            Prize
          </Typography>
          <Typography sx={catagoriesStyle}>
            {openFilterPrice ? (
              <KeyboardArrowUpIcon sx={{ ml: 1 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Box>
        <Collapse in={openFilterPrice} timeout="auto" unmountOnExit>
          <Slider />
          <Box sx={filterPrice}>
            <Typography>Price</Typography>
            <Typography variant="p">
              {<CurrencyRupeeIcon sx={ruppeIconStyle} />}
              50.0 ---
              {<CurrencyRupeeIcon sx={ruppeIconStyle} />}
              1150.0
            </Typography>
          </Box>
        </Collapse>
      </Box>

      <Divider />

      <Box>
        <Box sx={catagoryBoxStyle} onClick={() => setRating(!openRating)}>
          <Typography variant="body1" color="initial" sx={catagoriesStyle}>
            Rating
          </Typography>
          <Typography sx={catagoriesStyle}>
            {openRating ? (
              <KeyboardArrowUpIcon sx={{ ml: 1 }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ ml: 1 }} />
            )}
          </Typography>
        </Box>
        <FormControl>
          <Collapse in={openRating} timeout="auto" unmountOnExit>
            <RadioGroup>
              <FormControlLabel
                value="a"
                control={<Checkbox size="small" />}
                label={<Rating name="user-rating" defaultValue={5} readOnly />}
              />
              <FormControlLabel
                value="b"
                control={<Checkbox size="small" />}
                label={<Rating name="user-rating" defaultValue={4} readOnly />}
              />
              <FormControlLabel
                value="c"
                control={<Checkbox size="small" />}
                label={
                  <Rating name="user-rating" defaultValue={2.5} readOnly />
                }
              />
              <FormControlLabel
                value="b"
                control={<Checkbox size="small" />}
                label={<Rating name="user-rating" defaultValue={2} readOnly />}
              />
              <FormControlLabel
                value="c"
                control={<Checkbox size="small" />}
                label={<Rating name="user-rating" defaultValue={1} readOnly />}
              />
            </RadioGroup>
          </Collapse>
        </FormControl>
      </Box>

      <Divider />

      <Box>
        <Typography
          onClick={() => setOpenTags(!openTags)}
          variant="body1"
          color="initial"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "black",
            mt: 2,
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Popular Tag
          {openTags ? (
            <KeyboardArrowUpIcon sx={{ ml: 1 }} />
          ) : (
            <KeyboardArrowDownIcon sx={{ ml: 1 }} />
          )}
        </Typography>
        <Collapse in={openTags} timeout="auto" unmountOnExit>
          <Box sx={{ mt: 1 }}>
            {chips.map((chip, index) => (
              <Chip
                key={index}
                label={chip}
                sx={{
                  backgroundColor: "#D4D7D9",
                  m: 0.5,
                  textTransform: "capitalize",
                  // width
                }}
              />
            ))}
          </Box>
        </Collapse>
      </Box>
      <Box sx={{ marginTop: "20px" }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="230"
            image={img5}
            alt="green iguana"
          />
        </CardActionArea>
      </Box>

      <Box>
        <Typography variant="p" component="h4" sx={{ mt: "15px", mb: "7px" }}>
          {" "}
          Sale Products{" "}
        </Typography>

        {
         topThree.map((productDetail) => (
          
          <SaleProducts productDetail={productDetail} />
        )
        )
        }
      </Box>
    </Box>
  );
};

export default ProductDetails;

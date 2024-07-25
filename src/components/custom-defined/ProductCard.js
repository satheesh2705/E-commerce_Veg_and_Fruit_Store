import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";
// import img1 from '../../assets/images/img1.png'
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

// import theme from '../../theme/theme'
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Typography,
  Grid,
  Rating,
  CardContent,
  CardMedia,
  Card,
  styled,
} from "@mui/material";

const MediaContainer = styled("div")(({ theme }) => ({
  position: "relative",
  "&:hover .hover-icons": {
    display: "flex",
  },
}));

const HoverIcons = styled("div")(({ theme }) => ({
  display: "none",
  position: "absolute",
  top: theme.spacing(1),
  right: theme.spacing(1),
  gap: theme.spacing(1),
  flexDirection: "column",
  zIndex: 1,
}));

const CartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  right: theme.spacing(1.5),
  backgroundColor: "#F2F2F2",
  borderRadius: "50%",
  padding: theme.spacing(1),
  "&:hover": {
    padding: "0.7",
    backgroundColor: "#00B207",
  },
}));

const productNameStyle = {
  fontSize: "15px",
  marginBottom: "0",
  width: "fitContant",
};
const productPriceStyle = {
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  marginBottom: "0",
};

const gridStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "space-around",
  marginTop: "5px",
  marginBottom: "5px",
};

const ProductCard = ({ productDetail,addProductToCart }) => {
  return (
    <Grid item xs={10} sm={5} md={4} lg={3.5} sx={gridStyle}>
      <Card
        sx={{
          width: "390px",
          position: "relative",
          "&:hover": { border: "1px solid green" },
        }}
      >
        <MediaContainer>
          <CardMedia
            component="img"
            src={productDetail.productImage}
            height="auto"
          />
          <HoverIcons className="hover-icons">
            <FavoriteIcon
              sx={{
                border: "1px solid white",
                backgroundColor: "#F2F2F2",
                borderRadius: "50%",
                p: 0.7,
              }}
            />
            <VisibilityIcon
              sx={{
                mt: 0.5,
                border: "1px solid white",
                backgroundColor: "#F2F2F2",
                borderRadius: "50%",
                p: 0.7,
              }}
            />
          </HoverIcons>
        </MediaContainer>
        <CardContent>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            sx={productNameStyle}
          >
            {productDetail.productName}
          </Typography>
          <Typography variant="body2" color="text.black" sx={productPriceStyle}>
            <CurrencyRupeeIcon fontSize="5px" /> {productDetail.productRate}
          </Typography>
          <Rating
            name="read-only"
            value={productDetail.productRating}
            readOnly
            size="small"
          />
        </CardContent>
        <CartIcon onClick={() => addProductToCart(productDetail.id)}/>
      </Card>
    </Grid>
  );
};

export default ProductCard;

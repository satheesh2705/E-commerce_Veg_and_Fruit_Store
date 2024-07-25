
import React from "react";
import { Box, 
  Container, 
  Grid, 
  Typography,
  Link
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import InstagramIcon from "@mui/icons-material/Instagram";
import ApplePay from "../../assets/images/img1.png";
import Visa from "../../assets/images/img1.png";
import Discover from "../../assets/images/img1.png";
import Mastercard from "../../assets/images/img1.png";
import Cart from "../../assets/images/img1.png";

const footerData = {
  about:
    "This is satheesh saravanan from kallakkurichi, Bechular of Engineering in computer science and engineering  eget bibendum magna congue nec.",
  myAccount: [
    { text: "My Account", href: "#" },
    { text: "Order History", href: "#" },
    { text: "Shoping Cart", href: "#" },
    { text: "Wishlist", href: "#" },
    { text: "Settings", href: "#" },
  ],
  help: [
    { text: "Contact", href: "#" },
    { text: "Faqs", href: "#" },
    { text: "Terms & Condition", href: "#" },
    { text: "Privacy Policy", href: "#" },
  ],
  contactUs: [
    { text: "About", href: "#" },
    { text: "Shop", href: "#" },
    { text: "Product", href: "#" },
    { text: "Products Details", href: "#" },
    { text: "Track Order", href: "#" },
  ]};

const FooterBottom = {
  socialMedia: [
    <FacebookIcon />,
    <TwitterIcon />,
    <PinterestIcon />,
    <InstagramIcon />,
  ],
  copyRights: ["2021. All Rights Reserved"],
  payments: [ApplePay, Visa, Discover, Mastercard, Cart],
};

const topBoxStyle = {
      height:'100px',
      width:'100%',
      backgroundColor: '#EDF2EE',
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginTop:'15px'
      
    }
// const textFieldStyle = { 
//   width: "350px",
//    borderRadius:"40px"
// };

const Footer = ({ productDetails }) => {

  const topEight = productDetails.slice(0,8);
  const topFive = productDetails.slice(0,6);


  return (
    <Box>
      <Box style={topBoxStyle}>
          <Typography variant="h5" component='p'>
             Subscribe Our News Letter
          </Typography>
          <div id="subscribeBox">
             <input type="text" placeholder="Your Email Addres" />
              <button type="submit">Submit</button>
          </div>
      </Box>
      <Box
        bgcolor="background.paper"
        py={6}
        sx={{ backgroundColor: "#053309ea", color: "#618062" }}
      >
        <Container
          maxWidth="lg"
          sx={{ borderBottom: "1px solid #1B421D", pb: 7 }}
        >
          <Grid container spacing={5}>
            <Grid item xs={12} md={3.8} sx={{ width: "300px" }}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "white", mb: 1.5 }}
              >
                About
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  color: "#7A997C",
                  textDecoration: "none",
                  "&:hover": { color: "#FFFFFF" },
                  width:'80%',
                  textAlign:'justify'
                }}
              >
                {footerData.about}
              </Typography>
            </Grid>

            <Grid item xs={12} md={1.7}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "white", mb: 1.5 }}
              >
                My Account
              </Typography>
              {footerData.myAccount.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  variant="body2"
                  display="block"
                  sx={{
                    mt: 1,
                    color: "#7A997C",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Grid>

            <Grid item xs={12} md={1.8}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "white", mb: 1.5 }}
              >
                Helps
              </Typography>
              {footerData.help.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  variant="body2"
                  display="block"
                  gutterBottom
                  sx={{
                    mt: 1,
                    color: "#7A997C",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Grid>

            <Grid item xs={12} md={1.7}>
              <Typography variant="h6" gutterBottom sx={{ mb: 1.5 }}>
                &nbsp;{" "}
              </Typography>
              {footerData.contactUs.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  variant="body2"
                  display="block"
                  gutterBottom
                  sx={{
                    mt: 1,
                    color: "#7A997C",
                    textDecoration: "none",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  {item.text}
                </Link>
              ))}
            </Grid>

            <Grid item xs={12} md={3}>
              <Typography
                variant="h6"
                gutterBottom
                sx={{ color: "white", mb: 1.5 }}
              >
                Photos
              </Typography>
              <Grid container spacing={1}>
                {
                  topEight.map(( productDetail ) =>(
                    <Grid item xs={3} >
                      <img
                        alt="198"
                        src={productDetail.productImage}
                        style={{ width: "45px", cursor: "pointer" }}
                      />
                  </Grid>
                    )
                  )
                }
              </Grid>
            </Grid>
          </Grid>
        </Container>

        <Container maxWidth="lg">
          <Box sx={{ mt: "20px",mb: "-25px" }}>
            <Grid
              container
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "flex-start" }}
              >
                <Box display="flex" sx={{ gap: "10px" }}>
                  {FooterBottom.socialMedia.map((item, index) => (
                    <Box
                      sx={{
                        cursor: "pointer",
                        p: "3.5px",
                        "&:hover": {
                          backgroundColor: "#00B207",
                          color: "#fff",
                          borderRadius: "50%", p: "5px 5px 0 5px",
                        },
                      }}
                      key={index}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Typography variant="body2" sx={{ textAlign: "center" }}>
                  &copy; {FooterBottom.copyRights}
                </Typography>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Box display="flex" sx={{ gap: "8px" }}>
                  {topFive.map((productDetail) => (
                    <Box>
                      <img
                      alt="262"
                        src={productDetail.productImage}
                        style={{
                          width: "36px",
                          height: "24px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                    ) )}
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
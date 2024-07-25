import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from '../src/components/layout/Footer';
import Header from '../src/components/layout/Header'
import Cart from '../src/pages/Cart'
import Catagories from '../src/pages/Catagories';
import { useState } from "react";
import img1 from "../src/assets/images/img1.png";
import img2 from "../src/assets/images/img2.png";
import img3 from "../src/assets/images/img3.png";
import img4 from "../src/assets/images/img4.png";
import img13 from "../src/assets/images/img2.png";
import img7 from "../src/assets/images/img7.png";
import img8 from "../src/assets/images/img8.png";
import img10 from "../src/assets/images/img10.png";
import img11 from "../src/assets/images/img11.png";
import OrderHistory from './pages/OrderHistory';
import img12 from "../src/assets/images/img12.png";

function App() {
 
  const [productDetails, setProductDetails] = useState([
    { 
      id:1,
      productName: "Cabbage",
      productRate: "199.0",
      productRating: "4",
      productImage: img1,
      cartAdded:false,
      productCount:14,
      productSubTotal:"299.0",
    },
    {
      id:2,
      productName: "Mango",
      productRate: "69.0",
      productRating: "5",
      productImage: img2,
      cartAdded:false,
      productCount:4,
      productSubTotal:"199.0",
    },
    {
      id:3,
      productName: "Baby Corn",
      productRate: "99.0",
      productRating: "3",
      productImage: img3,
      cartAdded:false,
      productCount:2,
      productSubTotal:"199.0",

    },
    {
      id:4,
      productName: "Califlower",
      productRate: "190.0",
      productRating: "2",
      productImage: img4,
      cartAdded:false,
      productCount:4,
      productSubTotal:"190.0",
    },
    {
      id:5,
      productName: "flower",
      productRate: "190.0",
      productRating: "2",
      productImage: img13,
      cartAdded:false,
      productCount:0,
      productSubTotal:"90.0",
    },
    { 
      id:6,
      productName: "Cabbage",
      productRate: "199.0",
      productRating: "4",
      productImage: img1,
      cartAdded:false,
      productCount:14,
      productSubTotal:"299.0",
    },
    {
      id:7,
      productName: "Mango",
      productRate: "69.0",
      productRating: "5",
      productImage: img7,
      cartAdded:false,
      productCount:4,
      productSubTotal:"199.0",
    },
    {
      id:8,
      productName: "Baby Corn",
      productRate: "99.0",
      productRating: "3",
      productImage: img8,
      cartAdded:false,
      productCount:2,
      productSubTotal:"199.0",

    },
    
    {
      id:9,
      productName: "Califlower",
      productRate: "190.0",
      productRating: "2",
      productImage: img11,
      cartAdded:false,
      productCount:4,
      productSubTotal:"190.0",
    },
    {
      id:10,
      productName: "flower",
      productRate: "190.0",
      productRating: "2",
      productImage: img10,
      cartAdded:false,
      productCount:0,
      productSubTotal:"90.0",
    },
    
  ]);

  const [bilBox, setBillBox] = useState([
    {
     subTotal:'10',
     shippingCost:'0',
     totalCost:'0' 
    }
  ])

  function updateTotalCost(productDetails) {
    const filteredData = productDetails.filter(product => product.cartAdded);
    const subTotalCost = filteredData.reduce((acc, product) => acc + (product.productSubTotal || 0), 0);
    const shippingCost = subTotalCost > 1500 ? 0 : 129;
    const totalCost = subTotalCost + shippingCost;
    setBillBox([{ subTotal: subTotalCost, shippingCost:shippingCost, totalCost:totalCost }]);
  }

  function updateCart() {
    updateTotalCost(productDetails)
    setProductDetails(prevDetails => 
    prevDetails.map( product =>
      product.productCount >= 0 ?{...product, productSubTotal:product.productRate * product.productCount }:product
    )
   )
  }
 
  function incrementCount(id) {
    setProductDetails(prevDetails =>
      prevDetails.map(product =>
        product.id === id ? { ...product, productCount: product.productCount + 1 } : product
      )
    );
  }

  function decrementCount(id) {
    setProductDetails(prevDetails =>
      prevDetails.map(product =>
        product.id === id && product.productCount > 0 ? { ...product, productCount: product.productCount - 1 } : product
      )
    );
  }

  function addProductToCart(id){
    setProductDetails( prevDetails => 
      prevDetails.map( product =>
        product.id === id ? {...product, cartAdded:true } : product
      )

    )
  }


  return (
    <Box className="App">
      <Header  
        productDetails={productDetails}
        setProductDetails={setProductDetails}
      />
       <Routes>
          
          <Route path='cart/catagories' element={
                <Catagories 
                productDetails={productDetails}
                setProductDetails={setProductDetails}
                addProductToCart={addProductToCart}
              />
            } />
          <Route path='cart' element={
                <Cart
                  incrementCount={incrementCount}
                  decrementCount={decrementCount}
                  productDetails={productDetails}
                  bilBox={bilBox}
                  updateCart={updateCart}
           />} 
              />
            <Route path='orderHistory'
             element={
              <OrderHistory />
            } />

      </Routes>
      
      <Footer 
        productDetails={productDetails}
      />
          
    </Box>
  );
}

export default App;

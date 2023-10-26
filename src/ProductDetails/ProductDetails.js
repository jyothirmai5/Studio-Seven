import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import D1 from "../assets/Decor/D1/image1.png";
import D2 from "../assets/Decor/D1/image2.jpeg";
import "./ProductDetails.css";

const ProductDetails = () => {
  return (
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={D1} width="100%"></img>
          <div className="small-img-row">
            <div className="small-img-col">
              <img src={D1} width="100%"></img>
              <img src={D2} width="100%"></img>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p>Home/Decor/Rugs</p>
          <h1 className="ProductTittle">Kids Girrafe Rug</h1>
          <h4>$100.00</h4>
          <input type="number" value={1}></input>
          <div class="section-text">
            <a href="" className="btn">
              Add To Cart
            </a>
            <a href="" className="btn-fav">
              &#10084;
            </a>
            <h3>Product Description</h3>
            <p className="ProductDescription">
              Safari Dreams: Kids Giraffe Rugs Collection.<br></br>These vibrant
              and playful rugs bring the magic of the savannah right into your
              kids room.<br></br>Crafted with care, each rug is not only an
              exciting decorative piece but also a cozy haven for little feet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

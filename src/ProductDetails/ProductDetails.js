import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { categories } from '../Constants';
import "./ProductDetails.css";
import FavoriteIcon from "@mui/icons-material/Favorite";

const ProductDetails = () => {
  const { category, id } = useParams();
  const [productImages, setProductImages] = useState([]);
  const [currentImage, setCurrentImage] = useState('');
  useEffect(() => {
    categories.map((item) => {
      if (item.title === category) {
        item.product.map((product) => {
          if (product.id === id) {
            console.log(product.image)
            setProductImages(product.image);
            setCurrentImage(product.image[0]);
          }
        })

      }
    })
  }, []);
  const changeImage = (image) => {
    setCurrentImage(image);
  }
  return (
    productImages && currentImage &&
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img src={require(`../assets/${currentImage}`)} width="100%"></img>
          <div className="small-img-row">
            <div className="small-img-col">
              <img src={require(`../assets/${productImages[0]}`)} onClick={() => changeImage(productImages[0])} width="100%"></img>
              <img src={require(`../assets/${productImages[1]}`)} onClick={() => changeImage(productImages[1])} width="100%"></img>
            </div>
          </div>
        </div>
        <div className="col-2">
          <p>Home/Decor/Rugs</p>
          <h1 className="ProductTittle">Kids Girrafe Rug</h1>
          <h4>$99.99</h4>
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

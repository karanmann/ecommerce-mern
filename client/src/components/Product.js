import React from "react";
import Rating from "./Rating";
import { Link } from 'react-router-dom'

const Product = ({product}) => {

  const {name, image, price, rating, numReviews} = product

  return (
    <div className="row center">
      <div className="card">
      <Link to={`/product/${product._id}`}>
          <img className="medium" src={image} alt="product" />
        </Link>
        <div className="card-body">
          <a href="product.html">
            <h2>{name}</h2>
          </a>
          <Rating rating={rating} numReviews={numReviews}/>
          <div>
            <p className="price">Price: €{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

import React from "react";
import Product from "./Product.js";

// Functional component ProductList
const ProductList = (props) => {
  return (
    <div className="container">
      {/* Check if productList has items */}
      {props.productList.length > 0 ? (
        // If productList is not empty, map through each product
        props.productList.map((product, index) => (
          <Product
            key={index} // Unique key for each product
            product={product} // Product object passed as prop
            index={index} // Index of the product in the array
            incrementQuantity={props.incrementQuantity} // Function to increment quantity
            decrementQuantity={props.decrementQuantity} // Function to decrement quantity
            removeItem={props.removeItem} // Function to remove item
          />
        ))
      ) : (
        // If productList is empty, display message
        <div className="alert alert-info mt-3">
          <h4 className="text-center">No Products Exist in the Cart</h4>
        </div>
      )}
    </div>
  );
};

export default ProductList;

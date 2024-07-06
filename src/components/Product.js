import React from "react";

// Functional component Product
const Product = (props) => {
  return (
    <div className="row mt-3">
      {/* Product Name and Price */}
      <div className="col-5">
        <h2>
          {props.product.name} {/* Displaying product name */}
          <span className="badge bg-secondary">
            Rs.{props.product.price.toFixed(2)}{" "}
            {/* Displaying formatted product price */}
          </span>{" "}
        </h2>
      </div>

      {/* Quantity Management */}
      <div className="col-3">
        <div className="btn-group" role="group" aria-label="Quantity Control">
          {/* Decrement Quantity Button */}
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.decrementQuantity(props.index); // Calls decrementQuantity function from props with index
            }}
          >
            -
          </button>

          {/* Display Quantity */}
          <button type="button" className="btn btn-warning">
            {props.product.quantity} {/* Displaying current product quantity */}
          </button>

          {/* Increment Quantity Button */}
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              props.incrementQuantity(props.index); // Calls incrementQuantity function from props with index
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Total Price */}
      <div className="col-2">
        Rs.{(props.product.quantity * props.product.price).toFixed(2)}{" "}
        {/* Calculated total price for the product */}
      </div>

      {/* Remove Button */}
      <div className="col-2">
        <button
          className="btn btn-danger w-100"
          onClick={() => {
            props.removeItem(props.index); // Calls removeItem function from props with index
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default Product;

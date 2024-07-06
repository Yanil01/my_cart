import React from "react";

// Functional component Footer
const Footer = (props) => {
  // Function to handle payment
  const handlePayNow = () => {
    // Implement payment logic here (e.g., redirect to payment gateway, process payment, etc.)
    alert(`Payment processed for Rs.${props.totalAmount.toFixed(2)}`);
  };

  return (
    <div className="row fixed-bottom">
      {/* Reset button */}
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetQuantity(); // Calls resetQuantity function from props when clicked
        }}
      >
        Reset
      </button>

      {/* Total amount display */}
      <div className="col-8 bg-dark text-white text-center">
        Total Amount: Rs.{props.totalAmount.toFixed(2)}{" "}
        {/* Displays formatted totalAmount received from props */}
      </div>

      {/* Pay Now button */}
      <button className="btn btn-primary col-2" onClick={handlePayNow}>
        Pay Now
      </button>
    </div>
  );
};

export default Footer;

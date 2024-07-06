import React from "react";

// Class-based component AddItem
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    // Initializing state to manage form inputs
    this.state = {
      productName: "", // State for product name input
      productPrice: "", // State for product price input (changed to string for better handling)
    };
  }

  render() {
    return (
      <form
        className="row mb-5 align-items-end"
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          // Calling parent component's addItem function with current state values
          this.props.addItem(
            this.state.productName,
            parseFloat(this.state.productPrice) // Parsing input to float for more flexible price handling
          );
          // Resetting form inputs after submission
          this.setState({
            productName: "",
            productPrice: "",
          });
        }}
      >
        {/* Input field for product name */}
        <div className="mb-3 col-4">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            // Handling input change for product name
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName} // Binding input value to state
            required // Making input field mandatory
          />
        </div>

        {/* Input field for product price */}
        <div className="mb-3 col-4">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <div className="input-group">
            <input
              type="number"
              className="form-control"
              id="inputPrice"
              name="productPrice"
              // Handling input change for product price
              onChange={(e) => {
                this.setState({ productPrice: e.currentTarget.value });
              }}
              value={this.state.productPrice} // Binding input value to state
              step="0.01" // Allowing decimal input
              required // Making input field mandatory
            />
            <button type="submit" className="btn btn-primary">
              Add {/* Button placed next to the price input */}
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default AddItem;

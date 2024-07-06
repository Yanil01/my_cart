// Importing necessary components and styles
import logo from "./logo.svg"; // Example: importing logo
import "./App.css"; // Example: importing CSS styles
import Navbar from "./components/navbar"; // Example: importing Navbar component
import ProductList from "./components/productList"; // Example: importing ProductList component
import React, { useState } from "react"; // Example: importing React and useState hook
import Footer from "./components/footer"; // Example: importing Footer component
import AddItem from "./components/AddItem"; // Example: importing AddItem component

function App() {
  // Initial state for the product list and total amount
  const initialProductList = [
    {
      price: 98999,
      name: "IPhone 10 Max",
      quantity: 0,
    },
    {
      price: 29999,
      name: "Redmi 10 Max",
      quantity: 0,
    },
  ];
  let [productList, setProductList] = useState(initialProductList); // State for product list
  let [totalAmount, setTotalAmount] = useState(0); // State for total amount

  // Function to increment the quantity of a product
  const incrementQuantity = (index) => {
    let newProductList = [...productList]; // Copying the current product list
    let newTotalAmount = totalAmount; // Copying the current total amount
    newProductList[index].quantity++; // Incrementing the quantity of the selected product
    newTotalAmount += newProductList[index].price; // Adding the price of the product to total amount
    setTotalAmount(newTotalAmount); // Updating the total amount in state
    setProductList(newProductList); // Updating the product list in state
  };

  // Function to decrement the quantity of a product
  const decrementQuantity = (index) => {
    let newProductList = [...productList]; // Copying the current product list
    let newTotalAmount = totalAmount; // Copying the current total amount

    // Checking if quantity is greater than 0 before decrementing
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--; // Decrementing the quantity of the selected product
      newTotalAmount -= newProductList[index].price; // Subtracting the price from total amount
    }
    setTotalAmount(newTotalAmount); // Updating the total amount in state
    setProductList(newProductList); // Updating the product list in state
  };

  // Function to reset all quantities to zero
  const resetQuantity = () => {
    let newProductList = [...productList]; // Copying the current product list
    newProductList.map((products) => {
      products.quantity = 0; // Resetting quantity of each product to zero
    });
    setProductList(newProductList); // Updating the product list in state
    setTotalAmount(0); // Resetting the total amount to zero
  };

  // Function to remove an item from the product list
  const removeItem = (index) => {
    let newProductList = [...productList]; // Copying the current product list
    let newTotalAmount = totalAmount; // Copying the current total amount

    // Subtracting the price of the removed item from total amount
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1); // Removing the item from the product list
    setProductList(newProductList); // Updating the product list in state
    setTotalAmount(newTotalAmount); // Updating the total amount in state
  };

  // Function to add a new item to the product list
  const addItem = (name, price) => {
    let newProductList = [...productList]; // Copying the current product list
    newProductList.push({ price: price, name: name, quantity: 0 }); // Adding new item with given name, price, and initial quantity 0
    setProductList(newProductList); // Updating the product list in state
  };

  // Render function
  return (
    <>
      <Navbar /> {/* Rendering the Navbar component */}
      <main className="container mt-5">
        <AddItem addItem={addItem} />{" "}
        {/* Rendering the AddItem component and passing addItem function as prop */}
        <ProductList
          productList={productList} // Passing productList state as prop
          incrementQuantity={incrementQuantity} // Passing incrementQuantity function as prop
          decrementQuantity={decrementQuantity} // Passing decrementQuantity function as prop
          removeItem={removeItem} // Passing removeItem function as prop
        />
      </main>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />{" "}
      {/* Rendering the Footer component and passing totalAmount and resetQuantity function as props */}
    </>
  );
}

export default App; // Exporting the App component as default

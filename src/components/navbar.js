import React from "react";

// Class-based component Navbar
class Navbar extends React.Component {
  state = {}; // State is currently unused in this component

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Navbar brand */}
          <a className="navbar-brand" href="#">
            my_cart {/* Text displayed as the navbar brand */}
          </a>
        </div>
      </nav>
    );
  }
}

export default Navbar; // Exporting Navbar component as default

import React, { useState } from 'react';
import Navigation from "..components/navigation";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function Header() {
  const [currentPage, handlePageChange] = useState("Home");

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Profile":
        return <Profile />;
      case "Signup":
        return <Signup />;
      case "Login":
        return <Login />;

      default:
        return <Home />;
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          <a
            className="navbar-item"
            rel="noreferrer"
            target="_blank"
            href="./home"
          >
            <span className="content is-large">Beer Happy!</span>
          </a>
        </div>
      </nav>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Navigation
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      {/* Call the renderPage function passing in the currentPage */}
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>
  );
}

export default Header;
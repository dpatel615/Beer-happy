import React from "react";
import { getUser, removeUserSession } from '../utils/Common';

function Footer(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
  return (
    <footer className="footer">
      <div className="footer-bg">
      <header className="footer-title">Drink Responsibility</header>
      <div className="footer-container">
        {/* <header className="footer-title">Drink Responsibility</header><br/> */}
        <p className="contact">
          <strong className="footer-links"> A React site by </strong><br/>
          {" "}<br/>
          <a className="footer-links" href="https://www.linkedin.com/in/drusti-patel-a3507a19a/" target="_blank" rel="noreferrer">
          Drusti Patel,
          <hr />
          </a>{" "}
          |{" "}{" "}
          <a className="footer-links" href="https://www.linkedin.com/in/sumailah-aziz-75304a19a/" target="_blank" rel="noreferrer">
            Sumailah Aziz,
            <hr />
          </a>{" "}
          |{""}{""}
          <a className="footer-links" href="https://www.linkedin.com/in/sunny-agra/" target="_blank" rel="noreferrer">
            Lauren Agra,
            <hr />
          </a>{" "}
          |{""}{""}
          <a className="footer-links" href="https://www.linkedin.com/in/gavin-mumpower-58aaa1230/" target="_blank" rel="noreferrer">
            Gavin Mumpower
            <hr />
          </a>{" "}
        </p>
        <input className="logout" type="button" onClick={handleLogout} value="Logout" />
      </div>
      {/* <input className="logout" type="button" onClick={handleLogout} value="Logout" /> */}
      </div>
    </footer>
  );
}

export default Footer;
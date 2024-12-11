import React from "react";
import { FaEnvelope, FaNewspaper, FaTv } from "react-icons/fa";
//Dummy Component
const Nav = (props) => {
  return (
    <nav style={styles.navContainer}>
      <span style={styles.navIcons}>
        <button style={styles.buttonStyle}>
          <FaTv />
          <br /> Watch
        </button>
        <button style={styles.buttonStyle}>
          <FaEnvelope />
          <br />
          Messages
        </button>
        <button style={styles.buttonStyle}>
          <FaNewspaper /> <br />
          NewFeed
        </button>
      </span>
    </nav>
  );
};
export default Nav;
const styles = {
  navContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "8%",
    backgroundColor: "black",
  },
  navIcons: {
    color: "white",
    backgroundColor: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    backgroundColor: "lightgray",
    color: "black",
    padding: "1%",
    margin: "10%",
    cursor: "pointer",
    height: "40px",
    width: "100px",
    borderRadius: "10%",
    border: "1px solid white",
  },
};

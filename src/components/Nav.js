import React from "react";
import { FaEnvelope, FaNewspaper, FaTv } from "react-icons/fa";

//Dummy Component

const Nav = (props) => {
  return (
    <div style={styles.navContainer}>
      <span style={styles.navIcons}>
        <FaTv /> <button style={styles.buttonStyle}>Watch</button>
        <br />
        <FaEnvelope /> <button style={styles.buttonStyle}>Messages</button>
        <br />
        <FaNewspaper /> <button style={styles.buttonStyle}>NewFeed</button>
      </span>
    </div>
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

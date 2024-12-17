import React from "react";
import {
  FaEnvelope,
  FaNewspaper,
  FaDashcube,
  FaChartPie,
} from "react-icons/fa";
import { Link } from "react-router-dom";
//Dummy Component
const Nav = (props) => {
  return (
    <div style={styles.navContainer}>
      <span style={styles.navIcons}>
        <button style={styles.buttonStyle}>
          <Link to="/dashboard" style={styles.link}>
            <FaDashcube />
            <br />
            Dashboard
          </Link>
        </button>
        <button style={styles.buttonStyle}>
          <Link to="/chartDash" style={styles.link}>
            <FaChartPie />
            <br />
            Charts
          </Link>
        </button>
        <button style={styles.buttonStyle}>
          <Link to="/messages" style={styles.link}>
            <FaEnvelope />
            <br />
            Messages
          </Link>
        </button>
        <button style={styles.buttonStyle}>
          <Link to="/newsfeed" style={styles.link}>
            <FaNewspaper /> <br />
            NewFeed
          </Link>
        </button>
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

  link: {
    color: "black",
    textDecoration: "none",
  },
};

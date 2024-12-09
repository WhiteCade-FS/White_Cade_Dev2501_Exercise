import React from "react";
import { FaRegTimesCircle, FaEdit } from "react-icons/fa";

const GroceryArticle = (props) => {
  return (
    <article style={styles.myArticle} key={props.id}>
      <div style={styles.cardIcons}>
        <button style={styles.iconButton} onClick={props.editMe}>
          <FaEdit />
        </button>
        <button style={styles.iconButton} onClick={props.delMe}>
          <FaRegTimesCircle />
        </button>
      </div>
      <img
        src={props.val.gImg}
        alt={props.val.gAlt}
        style={styles.profilePic}
      />
      <h1>{props.val.gName}</h1>
      <p style={styles.paragraph}>{props.val.gDesc}</p>
    </article>
  );
};

export default GroceryArticle;

const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-evenly",
    alignItems: "center",
    margin: "1%",
    padding: "1%",
    border: "1px solid",
    width: "90%",
    height: "20%",
    backgroundColor: "white",
    boxShadow: "5px 10px 10px 10px lightgray",
  },
  profilePic: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    padding: "1%",
  },
  paragraph: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  cardIcons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    width: "100%",
  },
  iconButton: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  },
};

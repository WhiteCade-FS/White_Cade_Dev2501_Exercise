import React from "react";

import { GiHeartInside, GiJusticeStar } from "react-icons/gi";
import { FaEdit, FaRegTimesCircle } from "react-icons/fa";

// Dummy Component

const PostCard = (props) => {
  return (
    <article style={styles.myArticle}>
      <img src={props.profileImg} style={styles.profilePic} />
      <h1>{props.name}</h1>
      <div style={styles.cardIcons}>
        <button style={styles.iconButton}>
          <FaEdit />
        </button>
        <button style={styles.iconButton}>
          <FaRegTimesCircle />
        </button>
      </div>
      <br />
      <div style={styles.paragraph}>
        <p>{props.message}</p>
        <img src={props.image} alt={props.alt} style={styles.cardImage} />
      </div>
    </article>
  );
};

export default PostCard;

const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    // justifyContent: "space-evenly",
    alignItems: "center",
    margin: "10%",
    padding: "1%",
    border: "1px solid",
    width: "90%",
    height: "40%",
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
    width: "80%",
  },

  iconButton: {
    border: "none",
    cursor: "pointer",
    backgroundColor: "white",
  },

  cardImage: {
    width: "25%",
    height: "50%",
  },
};

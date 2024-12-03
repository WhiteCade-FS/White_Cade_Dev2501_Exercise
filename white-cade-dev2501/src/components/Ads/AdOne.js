import React from "react";

const AdOne = (props) => {
  return (
    <article style={styles.myArticle}>
      <h1>Biscuits</h1>
      <p>Biscuits are really good.</p>
      <div style={styles.cardButton}>
        <span type="submit" style={styles.cardButton}>
          Learn More
        </span>
      </div>
    </article>
  );
};

export default AdOne;

const styles = {
  myArticle: {
    display: "flex",
    flexDirection: "column",
    width: "250px",
    padding: "1%",
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    margin: "5%",
  },
};

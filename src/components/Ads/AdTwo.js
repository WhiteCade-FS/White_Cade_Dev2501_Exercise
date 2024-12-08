import React from "react";

const AdTwo = (props) => {
  return (
    <article style={styles.myArticle}>
      <h1>Hamburgers</h1>
      <p>Hamburgers are really good.</p>
      <div style={styles.cardButton}>
        <span type="submit" style={styles.cardButton}>
          Learn More
        </span>
      </div>
    </article>
  );
};

export default AdTwo;

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

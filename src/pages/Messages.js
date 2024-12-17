import React from "react";

function Messages() {
  return (
    <section style={styles.container}>
      <h1>Messages</h1>
      <p>Some Stuff</p>
      <p>Charts will go here</p>
    </section>
  );
}

export default Messages;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    width: "99vw",
  },
};

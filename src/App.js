import React, { Component } from "react";

//Add the Header
import Header from "../src/components/Header";

// Add Images
import CocaCola_Santa from "./images/CocaCola_Santa.jpg";
import LaysAd from "./images/LaysAd.png";
import MobileFortnite from "./images/MobileFortnite.jpg";
import Hero from "./images/hero-bg.jpg";

//Add buttons
import MyBtn from "./components/buttons/Mybtn";

//Add Navigation
import Nav from "./components/Nav";

//Add Form
import MyForm from "./components/MyForm";

//Add the PostCard
import PostCard from "./components/PostCard";

//Add Advertisements
import MyAds from "./components/MyAds";

class App extends Component {
  render() {
    return (
      <div>
        <Header pgTitle="CharacterSpace" placeholder="Search..." />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <div style={styles.main}>
            {/* <MyAvatar AvatarIcon={AvatarIcon} /> */}
            {/* <img src={AvatarIcon} alt="Logo" style={styles.logo} /> */}
            <MyForm />
            <PostCard
              profileImg={Hero}
              name={"Jane Doe"}
              message={"Ive been thinking a lot lately.... Who am I? LOL!"}
            />
          </div>

          {/* <MyBtn btnText="Post" /> */}

          <aside style={styles.ads}>
            Advertisements
            <MyAds
              img={CocaCola_Santa}
              alt={"This is an image of Santa Claus with a Coca-Cola."}
              title={"Winter is here, be festive and grab a Coca-Cola"}
              about={
                "Head to your local store and grab a Coca-Cola with Santa today!"
              }
            />
            <MyAds
              img={LaysAd}
              alt={
                "A picture of Lionel Messi, Paul Pogba, and Lieke Martens on a Lays Ad."
              }
              title={"Grab a pack of Lays Potato Chips and Win!"}
              about={
                "You could be a lucky winner of a trip to the FIFA World Cup by purchasing a bag of Lays Potato Chips today!"
              }
            />
            <MyAds
              img={MobileFortnite}
              alt={"This is an image of Fortnite on an Iphone."}
              title={"Fortnite is now mobile!"}
              about={
                "Head to the App Store and get your copy of Fortnite Mobile now!"
              }
            />
          </aside>
        </div>
      </div>
    );
  }
}

export default App;

// Styling for the dashboard is below

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    background: "WhiteSmoke",
    color: "",
    height: "100%",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft: 20,
    paddingRight: 50,
    color: "lightgray",
  },

  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 2,
  },

  // postCardContainer: {
  //   display: "flex",
  //   alignItems: "center",
  // },

  ads: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "white",
    paddingLeft: 20,
    paddingRight: 50,
    color: "lightgray",
  },

  logo: {
    height: "50px",
    width: "50px",
  },
};

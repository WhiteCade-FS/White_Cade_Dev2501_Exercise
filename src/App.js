import React, { Component } from "react";
//Add the Header
import Header from "./components/Header";
// Add Images
import CocaCola_Santa from "./images/CocaCola_Santa.jpg";
import LaysAd from "./images/LaysAd.png";
import MobileFortnite from "./images/MobileFortnite.jpg";
import Hero from "./images/hero-bg.jpg";
import Monkey from "./images/Monkey_thinking.jpg";
//Add Navigation
import Nav from "./components/Nav";
//Add Form
import MyForm from "./components/MyForm";
//Add the PostCard
import PostCard from "./components/PostCard";
//Add Advertisements
import MyAds from "./components/MyAds";

//Import list
import GroceryArticle from "./components/GroceryArticle";

class App extends Component {
  state = {
    gList: [
      {
        gName: "John Jacob",
        gDesc:
          "Whenever I go out, the people always shout. I am so loved, but ughhhh...",
        gImg: Monkey,
        gAlt: "picture of some bread",
      },
    ],
  };

  getInput = (e) => {
    this.setState({ gDesc: e.target.value });
    this.setState({ gName: e.target.value });
  };

  addItem = (e) => {
    e.preventDefault();
    this.setState({
      gList: [
        ...this.state.gList,

        {
          gName: this.state.gName,
          gDesc: this.state.gDesc,
        },
      ],
    });
    e.target.reset();
  };

  // addPost = (newPost) => {
  //   this.setState({ posts: [...this.state.posts, newPost] });
  // };

  // deletePost = (id) => {
  //   this.setState({ posts: this.state.posts.filter((post) => post.id !== id) });
  // };

  // editPost = (updatePost) => {
  //   this.setState({
  //     posts: this.state.posts.map((post) =>
  //       post.id === updatePost.id ? updatePost : post
  //     ),
  //   });
  // };

  render() {
    let myList = this.state.gList.map((element, i) => {
      return <GroceryArticle key={i} val={element} />;
    });

    return (
      <div>
        <Header pgTitle="CharacterSpace" placeholder="Search..." />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <main style={styles.main}>
            {/* <MyAvatar AvatarIcon={AvatarIcon} /> */}
            {/* <img src={AvatarIcon} alt="Logo" style={styles.logo} /> */}
            <MyForm getInput={this.getInput} addItem={this.addItem} />
            <PostCard
              profileImg={Hero}
              name={"Jane Doe"}
              message={"Ive been thinking a lot lately.... Who am I? LOL!"}
              image={Monkey}
              altImage={"Picture of a monkey thinking."}
            />
            {myList}
          </main>
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

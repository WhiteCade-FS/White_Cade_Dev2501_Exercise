import React from "react";
import { Routes, Route } from "react-router-dom";
//Add the Header
import Header from "./components/Header";
// Add Images
import CocaCola_Santa from "./images/CocaCola_Santa.jpg";
import LaysAd from "./images/LaysAd.png";
import MobileFortnite from "./images/MobileFortnite.jpg";
// import Monkey from "./images/Monkey_thinking.jpg";
// import AvatarIcon from "./images/cade_white_profile_pic.jpg";
//Add Navigation
import Nav from "./components/Nav";
//Add Form
// import MyForm from "./components/MyForm";
//Add Advertisements
import MyAds from "./components/MyAds";
//Import list
// import PostArticle from "./components/PostArticle";
//Import Dash and Chart
import Dashboard from "./pages/Dashboard";
import ChartDash from "./pages/ChartDash";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Newsfeed from "./pages/Newsfeed";

// class App extends Component {
  // state = {
  //   post: [
  //     {
  //       pName: "John Jacob",
  //       pDesc:
  //         "Whenever I go out, the people always shout. I am so loved, but ughhhh...",
  //       pImg: Monkey,
  //       pAlt: "picture of some bread",
  //     },
  //   ],
  //   color: "red",
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ color: "black" });
  //   }, 5000);
  // }
  // getInput = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };
  // addItem = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     post: [
  //       ...this.state.post,

  //       {
  //         pImg: AvatarIcon,
  //         pName: this.state.pName,
  //         pDesc: this.state.pDesc,
  //         pAlt: this.state.pAlt,
  //       },
  //     ],
  //   });
  //   e.target.reset();
  // };
  // removeItem = (key) => {
  //   const newPost = this.state.post.filter((post, i) => i !== key);
  //   this.setState({ post: newPost });
  // };
  // render() {
  //   let myList = this.state.post.map((element, i) => {
  //     return (
  //       <PostArticle
  //         key={i}
  //         val={element}
  //         delMe={() => this.removeItem(i)}
  //         editMe={() => this.editItem(element)}
  //       />
  //     );
  //   });
function App(){
    return (
      <div>
        <Header pgTitle="CharacterSpace" placeholder="Search..." />
        <div style={styles.container}>
          <Nav style={styles.nav} />
          <main style={styles.main}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="chartDash" element={<ChartDash />} />
              <Route path="messages" element={<Messages />} />
              <Route path="settings" element={<Settings />} />
              <Route path="newsfeed" element={<Newsfeed />} />
            </Routes>
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
// }
export default App;
// Styling for the dashboard is below
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    background: "WhiteSmoke",
    color: "",
    height: "100%",
  },
  // nav: {
  //   // display: "flex",
  //   // flexDirection: "column",
  //   // alignItems: "center",
  //   // background: "white",
  //   paddingLeft: 20,
  //   paddingRight: 50,
  //   // color: "lightgray",
  // },
  main: {
    display: "flex",
    flexDirection: "column",
    // justifyContent: "space-between"
    // alignItems: "center",
    // flex: 2,
  },
  // postCardContainer: {
  //   display: "flex",
  //   alignItems: "center",
  // },
  ads: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    // background: "white",
    // paddingLeft: 20,
    paddingRight: 50,
    color: "lightgray",
  },
  logo: {
    height: "50px",
    width: "50px",
  },
};

import React from "react";
import ReactDOM from "react-dom";

//import css
import "./index.css";

//import Components
import CustomNavbar from "./components/navbar.js";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import HeroesList from "./containers/heroes-list.js";


    let myLinks = [
      {
        text: "Home",
        link: "https://en.wikipedia.org/wiki/Justice_League#Various_origins_of_the_Justice_League"
      }, {
        text: "About",
        link: "https://en.wikipedia.org/wiki/Justice_League#Background"
      }, {
        text: "Super Hero",
        link: "https://en.wikipedia.org/wiki/Superheroes_in_animation"
      }, {
        text: "Contact",
        link: "https://en.wikipedia.org/wiki/Justice_League"
      }
    ];
    let myHeroes = [
      {
        name: "Wolverine",
        saying: "I’m the best there is at what I do.",
        image: "/images/wolverine.png"
      },
      {
        name: "Spiderman",
        saying: "With great power comes great responsibilty.",
        image: "/images/spiderman.jpg"
      },
      {
        name: "Thor",
        saying: "Odin’s beard.",
        image: "/images/thor.jpg"
      },
    ];

class App extends React.Component {
  render() {
    return (
      <div>
        <CustomNavbar brand="SuperHero Favs" links={myLinks}/>
        <Header/>
        <HeroesList heroes={myHeroes}/>
        <Footer/>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.querySelector("#root"));

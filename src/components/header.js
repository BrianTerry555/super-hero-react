import React from "react";



class Header extends React.Component {
  render() {
    return (
      <div>
        <div className="header-top"></div>
          <div className="header-bottom">
            <h1>Super Heroes</h1>
          
            <h3>Click your favorite SuperHero to see his catch phrase.</h3>
          </div>
      </div>
    )
  }
}

export default Header;

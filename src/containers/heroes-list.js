import React from "react";

import Heroes from "../components/heroes.js";

class HeroesList extends React.Component {
  alertSaying(saying){
    alert(`${saying}`);
  }
  render() {
    let heroes = this.props.heroes.map((item) => {
      return <Heroes key={item.name} handleClick={this.alertSaying}  name={item.name}  image={item.image} saying={item.saying} />
    });
    return (
      <div className="container">
        <div className="row">
          {heroes}
        </div>
      </div>
    )
  }
}


export default HeroesList;

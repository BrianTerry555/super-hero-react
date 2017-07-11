import React from "react";


class Heroes extends React.Component {
  render() {
    return (
      <div className="col-md-4">
        <div onClick={()=> {this.props.handleClick(this.props.saying)}} className="site-circle" style={{
          backgroundImage: `url('${this.props.image}')`,
        }}>
        <h3>{this.props.name}</h3>
        </div>
      </div>
    )
  }name
}

export default Heroes;

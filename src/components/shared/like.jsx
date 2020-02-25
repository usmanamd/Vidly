import React, { Component } from "react";
class Like extends Component {
  render() {
    let classes = "clickable fa fa-heart";
    if (!this.props.liked) classes += "-o";
    return (
      <span>
        <i
          onClick={this.props.onClick}
          className={classes}
          area-hidden="true"
        ></i>
      </span>
    );
  }
}

export default Like;

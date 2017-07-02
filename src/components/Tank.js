import React, { Component } from "react";
import autoBind from "react-autobind";
import * as tankIcon from "../images/fish-bowl.svg";
import styled from "styled-components";

const TankButton = styled.div`
  width: 3em;
  position: absolute;
  right: 10%;
  top: 0;
  cursor: pointer;
`;

const Count = styled.i`
  position: absolute;
  right: 0;
  bottom: -4px;
  background: darkseagreen;
  color: white;
  width: 25px;
  height: 25px;
  border-radius: 50px;
  text-align: center;
`;

class Tank extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    const { onClick, count } = this.props;

    return (
      <TankButton onClick={e => onClick(e)}>
        <div>
          <img src={tankIcon} />
          <Count>
            {count}
          </Count>
          <div>
            {this.props.children}
          </div>
        </div>
      </TankButton>
    );
  }
}

export default Tank;

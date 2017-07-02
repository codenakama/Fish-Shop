import React, { Component } from "react";
import autoBind from "react-autobind";
import * as tankIcon from "../images/fish-bowl.svg";
import styled from "styled-components";
import man from "../images/man.svg";
import manSad from "../images/man.svg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2em;
  margin-top: 4em;
`;

class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageOk:
        "Hello. How can I help? We have some rare fish on display this week! " +
        "I am here to help you make the right choices.",
      messageError: "Error message here."
    };
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    return (
      <Wrapper>
        <img src={man} />
        <div id="speech-box">
          {this.state.messageOk}
        </div>
      </Wrapper>
    );
  }
}

export default Seller;

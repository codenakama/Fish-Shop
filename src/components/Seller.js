import React, { Component } from "react";
import styled from "styled-components";
import man from "../images/man.svg";
import manWorried from "../images/man-worried.svg";
import PropTypes from "prop-types";

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
      messageWelcome:
        "Hello. How can I help? We have some rare fish on display this week! " +
        "I am here to help you make the right choices.",
      messageError: "Error message here."
    };
  }

  render() {
    const { face } = this.props;
    return (
      <Wrapper>
        {face === "happy" && <img alt="" src={man} />}
        {face === "worried" && <img alt="" src={manWorried} />}

        <div id="speech-box">
          {this.state.messageWelcome}
        </div>
      </Wrapper>
    );
  }
}

Seller.propTypes = {
  face: PropTypes.oneOf(["happy", "worried"])
};

Seller.defaultProps = {
  face: "happy"
};

export default Seller;

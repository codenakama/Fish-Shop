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
    this.state = {};
  }

  render() {
    const { face, message } = this.props;
    return (
      <Wrapper>
        {face === "happy" && <img alt="" src={man} />}
        {face === "worried" && <img alt="" src={manWorried} />}

        <div>
          {message}
        </div>
      </Wrapper>
    );
  }
}

Seller.propTypes = {
  face: PropTypes.oneOf(["happy", "worried"])
};

Seller.defaultProps = {
  face: "happy",
  message: "Hello world"
};

export default Seller;

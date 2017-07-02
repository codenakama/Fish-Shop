import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.a`
  color: #fff;
  background-color: ${props => (props.isEnabled ? "lightseagreen" : "grey")};
  padding: 1em 2em;
  opacity: 0.8;
  transition: opacity 0.5s ease;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { isEnabled } = this.props;
    return <StyledButton isEnabled={false} />;
  }
}

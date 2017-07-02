import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as tankSelectors from "../store/tank/reducer";
import * as tankActions from "../store/tank/actions";
import styled from "styled-components";
import List from "../components/List";

const MainWrapper = styled.div`
  margin: 50px;
  letter-spacing: 1px;
  position: relative;
`;

const TankList = styled.div`
  position: absolute;
  width: 9em;
  left: -100px;
  z-index: 10;
  background-color: darkseagreen;
  color: #fff;
  padding: 1em;
  margin-top: 1em;
`;

const Button = styled.a`
  color: #fff;
  background-color: lightseagreen;
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

const Wrapper = styled.div`margin-bottom: 2em;`;

class TankScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    const { fish } = this.props;
    return (
      <MainWrapper>
        <h1>My Fish Collection</h1>
        <List items={fish} onItemClick={this.handleFishClicked} />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    fish: tankSelectors.getFish(state)
  };
}

export default connect(mapStateToProps)(TankScreen);

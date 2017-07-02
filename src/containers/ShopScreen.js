import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as shopSeelectors from "../store/shop/reducer";
import * as shopActions from "../store/shop/actions";
import Tank from "../components/Tank";
import Seller from "../components/Seller";
import styled from "styled-components";

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
class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  handleTankClick() {}

  render() {
    const { fish } = this.props;
    return (
      <MainWrapper>
        <h1>The Fishop</h1>
        <Tank onClick={this.handleTankClick} count={10}>
          {/*<TankList />*/}
        </Tank>
        <Seller />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    fish: shopSeelectors.getFishForSale(state)
  };
}

export default connect(mapStateToProps)(ShopScreen);

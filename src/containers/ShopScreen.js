import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as shopSelectors from "../store/shop/reducer";
import * as shopActions from "../store/shop/actions";
import { Link } from "react-router";
import Tank from "../components/Tank";
import Seller from "../components/Seller";
import styled from "styled-components";
import List from "../components/List";
import Button from "../components/Button";

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

// const Button = styled.a`
//   color: #fff;
//   background-color: lightseagreen;
//   padding: 1em 2em;
//   opacity: 0.8;
//   transition: opacity 0.5s ease;
//   cursor: pointer;
//   box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
//   transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
//   &:hover {
//     box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
//   }
// `;

const Wrapper = styled.div`margin-bottom: 2em;`;

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  handleTankClick() {}

  handleFishClicked(fish) {
    this.props.dispatch(shopActions.addFishToBasket(fish));
  }

  render() {
    const { fish, fishInBasket, sellerState } = this.props;
    return (
      <MainWrapper>
        <h1>The Fishop</h1>
        <Link to="my-tank">
          <Tank onClick={this.handleTankClick} count={fishInBasket.length}>
            {/*<TankList />*/}
          </Tank>
        </Link>
        <Seller face={sellerState} />
        <Wrapper style={{ textAlign: "right" }}>
          <Button>Buy Fish</Button>
        </Wrapper>

        <List items={fish} onItemClick={this.handleFishClicked} />
      </MainWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    fish: shopSelectors.getFishForSale(state),
    fishInBasket: shopSelectors.getFishInBasket(state),
    sellerState: shopSelectors.getSellerState(state)
  };
}

export default connect(mapStateToProps)(ShopScreen);

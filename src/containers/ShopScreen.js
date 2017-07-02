import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as shopSeelectors from "../store/shop/reducer";
import * as shopActions from "../store/shop/actions";

class ShopScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    const { fish } = this.props;
    return (
      <div>
        {fish.map((fish, index) =>
          <div>
            {fish}
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fish: shopSeelectors.getFishForSale(state)
  };
}

export default connect(mapStateToProps)(ShopScreen);

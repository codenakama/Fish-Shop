import React, { Component } from "react";
import autoBind from "react-autobind";
import * as tankIcon from "../images/fish-bowl.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListItem = styled.li`
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  width: 22%;
  margin-bottom: 1em;
  cursor: pointer;
  padding: 1em;
  &:hover {
    color: deepskyblue;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  @media screen and (max-width: 780px) {
    width: 48%;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    autoBind(this);
  }

  componentDidMount() {}

  render() {
    const { items, onItemClick } = this.props;
    return (
      <StyledList>
        {items.map((item, index) =>
          <ListItem key={index} onClick={e => onItemClick(item)}>
            {item.replace("_", " ")}
          </ListItem>
        )}
      </StyledList>
    );
  }
}

List.propTypes = {
  items: PropTypes.array,
  /**
  * Callback function to handle click of an item in the list
  */
  onItemClick: PropTypes.func
};

List.defaultProps = {
  onItemClick: console.log("clicked"),
  items: ["item 1", "item 2", "item 3"]
};

export default List;

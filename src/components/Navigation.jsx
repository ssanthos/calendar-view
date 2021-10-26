import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  handlePrevClick() {
    this.props.onPrevAction();
  }
  handleNextClick() {
    this.props.onNextAction();
  }
  render() {
    return (
      <div className="navigation">
        <IconButton onClick={() => this.handlePrevClick()}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <IconButton onClick={() => this.handleNextClick()}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </div>
    );
  }
}

export default Navigation;

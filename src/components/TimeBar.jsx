import React, { Component } from "react";
import assert from "assert";
import Typography from "@mui/material/Typography";
import "./TimeBar.scss";

const HOUR_NUMBERS = [...Array(24).keys()].slice(1);

class TimeBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="time-bar">
        {HOUR_NUMBERS.map((hour) => (
          <div key={`${hour}`} className="time-bar-hour-label-container">
            <Typography className="time-bar-hour-label" variant="overline">
              {getHourLabel(hour)}
            </Typography>
          </div>
        ))}
      </div>
    );
  }
}

function getHourLabel(hour) {
  assert(hour >= 1 && hour <= 23);
  return `${((hour - 1) % 12) + 1} ${hour <= 11 ? "AM" : "PM"}`;
}

export default TimeBar;

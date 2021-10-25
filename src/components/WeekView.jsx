import React, { Component } from "react";
import "./WeekView.css";

import WeekDatesHeader from "./WeekDatesHeader";

class WeekView extends Component {
  render() {
    return (
      <div className="week-view-grid">
        <WeekDatesHeader />
      </div>
    );
  }
}

export default WeekView;

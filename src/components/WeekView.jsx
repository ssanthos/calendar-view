import React, { Component } from "react";
import "./WeekView.css";

import WeekDatesHeader from "./WeekDatesHeader";
import EventsView from "./EventsView";

class WeekView extends Component {
  render() {
    return (
      <div className="week-view-grid">
        <WeekDatesHeader weekStartDate={this.props.weekStartDate} />
        <EventsView weekStartDate={this.props.weekStartDate} />
      </div>
    );
  }
}

export default WeekView;

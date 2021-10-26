import React, { Component } from "react";
import "./WeekView.css";

import WeekDatesHeader from "./WeekDatesHeader";
import EventsView from "./EventsView";

class WeekView extends Component {
  render() {
    return (
      <div className="week-view-grid">
        <WeekDatesHeader />
        <EventsView />
      </div>
    );
  }
}

export default WeekView;

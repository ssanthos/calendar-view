import React, { Component } from "react";
import "./EventsView.scss";

import TimeBar from "./TimeBar";
import { DAY_INDICES } from "../constants";

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="events-view">
        <TimeBar />
        <div className="events-view-canvas">
          {DAY_INDICES.map(() => (
            <div className="events-day"></div>
          ))}
        </div>
      </div>
    );
  }
}

export default EventsView;

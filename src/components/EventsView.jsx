import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import "./EventsView.scss";
import EventStore from "../store/EventStore";

import TimeBar from "./TimeBar";
import { DAY_INDICES } from "../constants";

class EventsView extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }
  async componentDidMount() {
    const events = await EventStore.getAllEvents();
    this.setState({ events });
  }
  renderDay_(dayIndex, events) {
    events = events || [];
    return (
      <div className="events-day" key={`${dayIndex}`}>
        {events.map((event) => (
          <Box
            key={`${event.id}`}
            className="event"
            sx={{
              top: `${getEventTopPositionPercentage(event.start)}%`,
              height: `${getEventHeightPercentage(event.duration)}%`,
            }}
          >
            <Button variant="contained" className="event-title">
              {event.title}
            </Button>
          </Box>
        ))}
      </div>
    );
  }
  render() {
    const eventByDay = toEventByDay(this.state.events);
    return (
      <div className="events-view">
        <TimeBar />
        <div className="events-view-canvas">
          {DAY_INDICES.map((dayIndex) =>
            this.renderDay_(dayIndex, eventByDay.get(dayIndex))
          )}
        </div>
      </div>
    );
  }
}

function getEventTopPositionPercentage(eventStartDate) {
  const minutes = eventStartDate.getHours() * 60 + eventStartDate.getMinutes();
  return (minutes * 100) / (24 * 60);
}

/**
 * Calculates the percentage height for the event box.
 * @param {number} duration Duration in seconds
 * @return {number}
 */
function getEventHeightPercentage(duration) {
  return ((duration / 60) * 100) / (24 * 60);
}

/**
 * Groups events by day (index).
 * @param {!Array<Event>} events
 * @return {!Map<number, !Array<Event>>}
 */
function toEventByDay(events) {
  const eventByDayMap = new Map();
  events.forEach((event) => {
    const day = new Date(event.start).getDay();
    if (!eventByDayMap.has(day)) {
      eventByDayMap.set(day, []);
    }
    eventByDayMap.get(day).push(event);
  });
  return eventByDayMap;
}

export default EventsView;

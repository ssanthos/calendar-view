import React, { Component } from "react";
import "./WeekDatesHeader.css";
import { getNextNthDate, isSameDate } from "../utils/dateUtils";
import { DAY_INDICES } from "../constants";

import DateHeader from "./DateHeader";

class WeekDatesHeader extends Component {
  constructor(props) {
    super(props);
    // TODO: The TODAY value should come from a store so that
    // the component can be updated when the current date changes.
    this.state = { today: new Date() };
  }
  render() {
    const { weekStartDate } = this.props;

    return (
      <div className="week-dates-header">
        {DAY_INDICES.map((dayIndex) => {
          const thisDate = getNextNthDate(weekStartDate, dayIndex);
          return (
            <DateHeader
              key={`${dayIndex}`}
              date={thisDate}
              dayOfWeek={dayIndex}
              isToday={isSameDate(this.state.today, thisDate)}
            />
          );
        })}
      </div>
    );
  }
}

export default WeekDatesHeader;

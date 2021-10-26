import React, { Component } from "react";
import "./WeekDatesHeader.css";
import {
  getWeekStartDate,
  getNextNthDate,
  isSameDate,
} from "../utils/dateUtils";
import { DAY_INDICES } from "../constants";

import DateHeader from "./DateHeader";

const TODAY = new Date("2021-10-25T19:27:49.401Z");

class WeekDatesHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { weekStartDate: getWeekStartDate(TODAY) };
  }
  render() {
    const { weekStartDate } = this.state;

    return (
      <div className="week-dates-header">
        {DAY_INDICES.map((dayIndex) => {
          const thisDate = getNextNthDate(weekStartDate, dayIndex);
          return (
            <DateHeader
              key={`${dayIndex}`}
              date={thisDate}
              dayOfWeek={dayIndex}
              isToday={isSameDate(TODAY, thisDate)}
            />
          );
        })}
      </div>
    );
  }
}

export default WeekDatesHeader;

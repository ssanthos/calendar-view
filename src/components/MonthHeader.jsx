import React, { Component } from "react";
import Typography from "@mui/material/Typography";
import { getWeekEndDateWithEndTime } from "../utils/dateUtils";
import { MONTH_LONG_NAMES, MONTH_SHORT_NAMES } from "../constants";
import "./MonthHeader.css";

class MonthHeader extends Component {
  renderOneMonthText_(date) {
    return `${MONTH_LONG_NAMES[date.getMonth()]}`;
  }
  renderTwoMonthText_(startDate, endDate) {
    return `${MONTH_SHORT_NAMES[startDate.getMonth()]} -  ${
      MONTH_SHORT_NAMES[endDate.getMonth()]
    }`;
  }
  render() {
    const { weekStartDate } = this.props;
    const weekEndDate = getWeekEndDateWithEndTime(weekStartDate);
    const doesTheWeekSpanTwoMonths =
      weekStartDate.getMonth() !== weekEndDate.getMonth();
    return (
      <Typography display="block" variant="h6" className="month-header">
        {doesTheWeekSpanTwoMonths
          ? this.renderTwoMonthText_(weekStartDate, weekEndDate)
          : this.renderOneMonthText_(weekStartDate)}{" "}
        {weekStartDate.getFullYear()}
      </Typography>
    );
  }
}

export default MonthHeader;

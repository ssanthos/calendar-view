import React, { Component } from "react";
import classnames from "classnames";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./DateHeader.css";

import { DAY_SHORT_NAMES } from "../constants";

class DateHeader extends Component {
  render() {
    const { dayOfWeek, date, isToday } = this.props;
    return (
      <Box className="date-header-container">
        <Typography display="block" variant="overline">
          {DAY_SHORT_NAMES[dayOfWeek]}
        </Typography>
        <Box
          className={classnames("date-header-date-wrapper", {
            "is-today": isToday,
          })}
          display="inline-block"
        >
          <Typography className="date-header-date" variant="h5">
            {date.getDate()}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default DateHeader;

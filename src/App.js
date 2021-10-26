import React, { Component } from "react";
import "./App.css";
import {
  getWeekStartDate,
  getPrevWeekStartDate,
  getNextWeekStartDate,
} from "./utils/dateUtils";

import MonthHeader from "./components/MonthHeader";
import Header from "./components/Header";
import WeekView from "./components/WeekView";
import Navigation from "./components/Navigation";

const START_DATE = new Date(); // new Date("2021-10-25T19:27:49.401Z");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { weekStartDate: getWeekStartDate(START_DATE) };
  }
  handlePrevAction() {
    this.setState({
      weekStartDate: getPrevWeekStartDate(this.state.weekStartDate),
    });
  }
  handleNextAction() {
    this.setState({
      weekStartDate: getNextWeekStartDate(this.state.weekStartDate),
    });
  }
  render() {
    return (
      <div className="app">
        <Header>
          <Navigation
            onPrevAction={() => this.handlePrevAction()}
            onNextAction={() => this.handleNextAction()}
          />
          <MonthHeader weekStartDate={this.state.weekStartDate} />
        </Header>
        <WeekView weekStartDate={this.state.weekStartDate} />
      </div>
    );
  }
}

export default App;

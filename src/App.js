import logo from "./calendar.svg";
import "./App.css";

import WeekView from "./components/WeekView";

function App() {
  return (
    <div className="app">
      <header className="header">
        <a className="logo-container" href="./">
          <img className="logo" src={logo} alt="logo" />
          <span className="app-name">Calendar Weekly</span>
        </a>
      </header>
      <WeekView />
    </div>
  );
}

export default App;

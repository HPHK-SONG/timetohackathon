import React, { useState, useEffect } from "react";
import moment from "moment";
import bg from "./hackathon.jpg";
import "./App.css";

function App() {
  const [time, setTime] = useState("");
  const getDday = () => {
    const now = moment();
    const hackerthon = moment("2019-11-27.09:00:00");
    const duration = moment.duration(hackerthon.diff(now));
    setTime(
      `${duration.days()}일 ${duration.hours()}시간 ${duration.minutes()}분 ${duration.seconds()}초`
    );
  };
  useEffect(() => {
    setInterval(() => {
      getDday();
    }, 1000);
  }, []);
  return (
    <>
      <div className="center">
        <div className="after" style={style.after}></div>
        <div className="time">
          <h1>해커톤 발표(11.27 09:00)까지 남은 시간</h1>
          <h2>{time}</h2>
        </div>
      </div>
    </>
  );
}

const style = {
  after: {
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    overflow: "hidden",
    opacity: 0.5,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    position: "absolute",
    zIndex: -1
  }
};

export default App;

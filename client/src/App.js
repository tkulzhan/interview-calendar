import AddBtn from "./components/AddBtn";
import Calendar from "./components/Calendar/Calendar";
import Day from "./components/Calendar/Day";
import Header from "./components/Header";
import Month from "./components/Calendar/Month";
import arrow from "./assets/arrow.png";
import { Row, FirstRow, LastRow } from "./components/Schedule/Row";
import Footer from "./components/Footer";
import { useState } from "react";

const currentDate = new Date();

let currentDay = currentDate.getDay();

if (currentDay === 0) {
  currentDay = 6;
} else {
  currentDay -= 1;
}

const startDate = new Date(currentDate);
startDate.setDate(currentDate.getDate() - currentDay);

const endDate = new Date(currentDate);
endDate.setDate(currentDate.getDate() + (6 - currentDay));

const days = [];
const weekdays = ["M", "T", "W", "T", "F", "S", "S"];

for (let i = 0; i < 7; i++) {
  const date = new Date(startDate);
  date.setDate(startDate.getDate() + i);

  const weekDay = weekdays[i];
  const monthDay = date.getDate();

  days.push({ weekDay, monthDay });
}

const schedules = [
  { time: "00:00", ocupied: [true, true, false, true, true, true, false] },
  { time: "01:00", ocupied: [false, false, true, true, true, false, true] },
  { time: "02:00", ocupied: [false, false, true, false, true, true, true] },
  { time: "03:00", ocupied: [true, true, true, true, false, true, false] },
  { time: "04:00", ocupied: [false, false, true, true, true, true, false] },
  { time: "05:00", ocupied: [true, true, true, true, true, false, false] },
  { time: "06:00", ocupied: [false, false, false, true, true, true, true] },
  { time: "07:00", ocupied: [false, true, false, false, true, true, true] },
  { time: "08:00", ocupied: [true, true, true, false, false, true, false] },
  { time: "09:00", ocupied: [false, true, true, false, false, true, true] },
  { time: "10:00", ocupied: [false, true, true, true, true, true, false] },
  { time: "11:00", ocupied: [true, true, true, false, true, true, false] },
  { time: "12:00", ocupied: [true, true, true, true, false, false, false] },
  { time: "13:00", ocupied: [true, true, true, false, true, false, true] },
  { time: "14:00", ocupied: [false, true, true, true, true, false, false] },
  { time: "15:00", ocupied: [true, false, true, true, true, false, false] },
  { time: "16:00", ocupied: [true, false, false, true, false, true, true] },
  { time: "17:00", ocupied: [true, false, true, false, true, true, true] },
  { time: "18:00", ocupied: [false, false, true, true, true, true, true] },
  { time: "19:00", ocupied: [false, true, true, false, true, true, false] },
  { time: "20:00", ocupied: [true, true, true, false, true, false, true] },
  { time: "21:00", ocupied: [false, true, true, false, true, true, true] },
  { time: "22:00", ocupied: [false, false, true, true, false, true, true] },
  { time: "23:00", ocupied: [true, true, false, true, false, false, true] },
];

function App() {
  const [isDelete, setIsDelete] = useState(false);
  const handleClick = (ocupied, target) => {
    if (target.classList.contains("active")) {
      setIsDelete(ocupied);
    } else {
      setIsDelete(false);
    }
  };
  return (
    <div className="app">
      <Header>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h1>Interview Calendar</h1>
          <AddBtn
            onClick={() => {
              prompt("Enter event time:\nYYYY-MM-DD HH:mm:ss");
            }}
          >
            <span>+</span>
          </AddBtn>
        </div>

        <Calendar>
          <Day></Day>
          {days.map((day, i) => {
            return <Day key={i} day={day} />;
          })}
          <Day></Day>
          <Month>
            <img src={arrow} alt="Previous" width={32} />
            <h3>
              {`${currentDate.toLocaleString("en-US", {
                month: "long",
              })} ${currentDate.getFullYear()}`}
            </h3>
            <img
              src={arrow}
              alt="Next"
              width={34}
              style={{ rotate: "180deg" }}
            />
          </Month>
        </Calendar>
      </Header>
      <div className="row-pad"></div>
      <div style={{ marginTop: 20 }}>
        <FirstRow handleClick={handleClick} key={0} schedule={schedules[0]} />
        {schedules.slice(1).map((schedule, i) => {
          return <Row handleClick={handleClick} key={i} schedule={schedule} />;
        })}
        <LastRow />
      </div>
      <div style={{ padding: 18 }}></div>
      <Footer isDelete={isDelete} />
    </div>
  );
}

export default App;

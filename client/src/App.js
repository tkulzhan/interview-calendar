import AddBtn from "./components/AddBtn";
import Calendar from "./components/Calendar/Calendar";
import Day from "./components/Calendar/Day";
import Header from "./components/Header";
import Month from "./components/Calendar/Month";
import arrow from "./assets/arrow.png";
import Row from "./components/Schedule/Row";

const days = [
  { weekDay: "M", monthDay: 25 },
  { weekDay: "T", monthDay: 26 },
  { weekDay: "W", monthDay: 27 },
  { weekDay: "T", monthDay: 28 },
  { weekDay: "F", monthDay: 29 },
  { weekDay: "S", monthDay: 30 },
  { weekDay: "S", monthDay: 31 },
];

const schedules = [
  [true, true, false, true, true, true, false, false],
  [false, false, true, true, true, false, true, true],
  [false, false, true, false, true, true, true, true],
  [true, true, true, true, false, true, false, false],
  [false, false, true, true, true, true, false, true],
  [true, true, true, true, true, false, false, false],
  [false, false, false, true, true, true, true, true],
  [false, true, false, false, true, true, true, true],
  [true, true, true, false, false, true, false, true],
  [false, true, true, false, false, true, true, true],
  [false, true, true, true, true, true, false, false],
  [true, true, true, false, true, true, false, false],
  [true, true, true, true, false, false, false, true],
  [true, true, true, false, true, false, true, false],
  [false, true, true, true, true, false, false, false],
  [true, false, true, true, true, false, false, true],
  [true, false, false, true, false, true, true, true],
  [true, false, true, false, true, true, true, true],
  [false, false, true, true, true, true, true, false],
  [false, true, true, false, true, true, false, true],
  [true, true, true, false, true, false, true, false],
  [false, true, true, false, true, true, true, true],
  [false, false, true, true, false, true, true, true],
  [true, true, false, true, false, false, true, true],
  [false, true, false, true, true, false, true, true],
];

function App() {
  return (
    <div className="app">
      <Header>
        <h1>Interview Calendar</h1>
        <AddBtn>
          <span>+</span>
        </AddBtn>
      </Header>
      <Calendar>
        <Day></Day>
        {days.map((day, i) => {
          return <Day key={i} day={day} />;
        })}
        <Day></Day>
        <Month>
          <img src={arrow} alt="Previous" width={34} />
          <h3>March 2019</h3>
          <img src={arrow} alt="Next" width={34} style={{ rotate: "180deg" }} />
        </Month>
      </Calendar>
      {schedules.map((schedule, i) => {
        return <Row key={i} schedule={schedule} />;
      })}
    </div>
  );
}

export default App;

import styled from "styled-components";

const DayContainer = styled.div`
  flex-basis: calc(100% / 8);
  box-sizing: border-box;
  padding: 10px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WeekDay = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    font-size: 3.75vw;
    margin-bottom: 15px;
  }
`;

const currentDay = new Date().getDate();

const MonthDay = styled.p`
  font-size: 28px;
  margin: 0% 0%;
  font-weight: 400;

  ${(props) =>
    props?.monthDay === currentDay &&
    `
      background-color: #ff3434;
      border-radius: 50%;
      color: #fff;
      padding: 5px 5px;
      margin-top: 37.5px;
      position: absolute;
    `}

  @media screen and (max-width: 768px) {
    font-size: 20px;
    ${(props) =>
      props?.monthDay === currentDay &&
      `
      margin-top: 35px;
    `}
  }
  @media screen and (max-width: 375px) {
    font-size: 4.5vw;

    ${(props) =>
      props?.monthDay === currentDay &&
      `
      margin-top: calc(4.5vw + 12.5px);
    `}
  }
`;

const Day = ({ day }) => {
  return (
    <DayContainer>
      <WeekDay>{day?.weekDay}</WeekDay>
      <MonthDay monthDay={day?.monthDay}>{day?.monthDay}</MonthDay>
    </DayContainer>
  );
};

export default Day;

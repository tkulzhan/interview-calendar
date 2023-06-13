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
`;

const MonthDay = styled.p`
  font-size: 28px;
  margin: 0% 0%;
  font-weight: 400;
`;

const Day = ({ day }) => {
  return (
    <DayContainer>
      <WeekDay>{day?.weekDay}</WeekDay>
      <MonthDay>{day?.monthDay}</MonthDay>
    </DayContainer>
  );
};

export default Day;

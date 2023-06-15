import styled from "styled-components";

const Cell = styled.div`
  flex-basis: calc(100% / 8);
  box-sizing: border-box;
  width: 60px;
  height: 65px;
  display: flex;
  justify-content: center;
  padding: 0%;

  p {
    color: #bebebe;
    margin: 0% 0%;
    margin-top: -12px;
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    p {
      font-size: 18px;
      margin-top: -9px;
    }
  }

  @media screen and (max-width: 500px) {
    height: 50px;
  }

  @media screen and (max-width: 350px) {
    height: 40px;
    p {
      font-size: 15px;
      margin-top: -8px;
    }
  }
`;

const HourCell = styled(Cell)`
  align-items: center;
  border: 1px solid #e1e1e1;
`;

const InnerCell = styled.div`
  background-color: ${(props) => (props?.colored ? "#eaebfe" : "#fff")};
  width: 90%;
  height: 90%;
`;

const FirstCell = styled(HourCell)`
  border-left: none;
`;

const LastCell = styled(HourCell)`
  border-right: none;
`;

const FirstRowCell = styled(HourCell)`
  border-top: 2px solid #e1e1e1;
`;

const FirstRowFirstCell = styled(FirstCell)`
  border-top: 2px solid #e1e1e1;
`;

const FirstRowLastCell = styled(LastCell)`
  border-top: 2px solid #e1e1e1;
`;

const LastRowCell = styled(HourCell)`
  border: none;
  border-top: 1px solid #e1e1e1;
`;

const setActive = (event) => {
  const target = event.target;
  const isActive = target.classList.contains("active");
  const innerCells = document.querySelectorAll(".inner-cell");
  innerCells.forEach((cell) => {
    cell.classList.remove("active");
  });
  if (isActive) {
    target.classList.remove("active");
  } else {
    target.classList.add("active");
  }
};

const FirstRow = ({ schedule, handleClick }) => {
  return (
    <div className="row">
      <Cell>
        <p>{schedule.time}</p>
      </Cell>
      <FirstRowFirstCell>
        <InnerCell
          className="inner-cell"
          colored={schedule.ocupied[0]}
          onClick={(evt) => {
            setActive(evt);
            handleClick(schedule.ocupied[0], evt.target);
          }}
        />
      </FirstRowFirstCell>
      {schedule.ocupied.slice(1, 6).map((ocupied, i) => {
        return (
          <FirstRowCell key={i}>
            <InnerCell
              className="inner-cell"
              colored={ocupied}
              onClick={(evt) => {
                setActive(evt);
                handleClick(ocupied, evt.target);
              }}
            />
          </FirstRowCell>
        );
      })}
      <FirstRowLastCell>
        <InnerCell
          className="inner-cell"
          colored={schedule.ocupied[6]}
          onClick={(evt) => {
            setActive(evt);
            handleClick(schedule.ocupied[6], evt.target);
          }}
        />
      </FirstRowLastCell>
    </div>
  );
};

const Row = ({ schedule, handleClick }) => {
  return (
    <div className="row">
      <Cell>
        <p>{schedule.time}</p>
      </Cell>
      <FirstCell>
        <InnerCell
          className="inner-cell"
          colored={schedule.ocupied[0]}
          onClick={(evt) => {
            setActive(evt);
            handleClick(schedule.ocupied[0], evt.target);
          }}
        />
      </FirstCell>
      {schedule.ocupied.slice(1, 6).map((ocupied, i) => {
        return (
          <HourCell key={i}>
            <InnerCell
              className="inner-cell"
              colored={ocupied}
              onClick={(evt) => {
                setActive(evt);
                handleClick(ocupied, evt.target);
              }}
            />
          </HourCell>
        );
      })}
      <LastCell>
        <InnerCell
          className="inner-cell"
          colored={schedule.ocupied[6]}
          onClick={(evt) => {
            setActive(evt);
            handleClick(schedule.ocupied[6], evt.target);
          }}
        />
      </LastCell>
    </div>
  );
};

const LastRow = () => {
  return (
    <div className="row">
      <Cell>
        <p>00:00</p>
      </Cell>
      <LastRowCell />
      <LastRowCell />
      <LastRowCell />
      <LastRowCell />
      <LastRowCell />
      <LastRowCell />
      <LastRowCell />
    </div>
  );
};

export { Row, FirstRow, LastRow };

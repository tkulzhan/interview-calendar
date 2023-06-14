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
    font-family: Helvetica, sans-serif;
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

const FirstRow = ({ schedule }) => {
  return (
    <div style={{ display: "flex" }}>
      <Cell>
        <p>{schedule.time}</p>
      </Cell>
      <FirstRowFirstCell>
        <InnerCell colored={schedule.ocupied[0]} />
      </FirstRowFirstCell>
      <FirstRowCell>
        <InnerCell colored={schedule.ocupied[1]} />
      </FirstRowCell>
      <FirstRowCell>
        <InnerCell colored={schedule.ocupied[2]} />
      </FirstRowCell>
      <FirstRowCell>
        <InnerCell colored={schedule.ocupied[3]} />
      </FirstRowCell>
      <FirstRowCell>
        <InnerCell colored={schedule.ocupied[4]} />
      </FirstRowCell>
      <FirstRowCell>
        <InnerCell colored={schedule.ocupied[5]} />
      </FirstRowCell>
      <FirstRowLastCell>
        <InnerCell colored={schedule.ocupied[6]} />
      </FirstRowLastCell>
    </div>
  );
};

const Row = ({ schedule }) => {
  return (
    <div style={{ display: "flex" }}>
      <Cell>
        <p>{schedule.time}</p>
      </Cell>
      <FirstCell>
        <InnerCell colored={schedule.ocupied[0]} />
      </FirstCell>
      <HourCell>
        <InnerCell colored={schedule.ocupied[1]} />
      </HourCell>
      <HourCell>
        <InnerCell colored={schedule.ocupied[2]} />
      </HourCell>
      <HourCell>
        <InnerCell colored={schedule.ocupied[3]} />
      </HourCell>
      <HourCell>
        <InnerCell colored={schedule.ocupied[4]} />
      </HourCell>
      <HourCell>
        <InnerCell colored={schedule.ocupied[5]} />
      </HourCell>
      <LastCell>
        <InnerCell colored={schedule.ocupied[6]} />
      </LastCell>
    </div>
  );
};

const LastRow = () => {
  return (
    <div style={{ display: "flex" }}>
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

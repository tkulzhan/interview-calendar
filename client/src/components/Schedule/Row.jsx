import styled from "styled-components";

const EmptyCell = styled.div`
  flex-basis: calc(100% / 8);
  box-sizing: border-box;
  width: 60px;
  height: 65px;
`;

const Cell = styled.div`
  flex-basis: calc(100% / 8);
  border: 1px solid #e1e1e1;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0%;
`;

const InnerCell = styled.div`
  background-color: ${(props) => (props?.colored ? "#eaebfe" : "#fff")};
  width: 90%;
  height: 90%;
`;

const FirstCell = styled(Cell)`border-left: none`;

const Row = ({ schedule }) => {
  return (
    <div style={{ display: "flex" }}>
      <EmptyCell />
      <FirstCell>
        <InnerCell colored={schedule[0]} />
      </FirstCell>
      <Cell>
        <InnerCell colored={schedule[1]} />
      </Cell>
      <Cell>
        <InnerCell colored={schedule[2]} />
      </Cell>
      <Cell>
        <InnerCell colored={schedule[3]} />
      </Cell>
      <Cell>
        <InnerCell colored={schedule[4]} />
      </Cell>
      <Cell>
        <InnerCell colored={schedule[5]} />
      </Cell>
      <Cell>
        <InnerCell colored={schedule[6]} />
      </Cell>
    </div>
  );
};

export default Row;

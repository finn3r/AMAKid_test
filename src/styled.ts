import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: .2fr 1fr .5fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  font-family: "Quinquefive Wonv", serif;
`;

export const RefreshButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 10px;
  margin: 4px;
  :hover{
    cursor: pointer;
  }
`;

export const Header = styled.header`
  position: relative;
  font-size: 30px;
  padding: 50px;
`;

export const GameField = styled.div<{ countOfCells: number }>`
  display: grid;
  grid-template-columns: repeat(${props => Math.round(Math.sqrt(props.countOfCells))}, 1fr);
  gap: 10px;
  max-width: calc(150px * ${props => Math.round(Math.sqrt(props.countOfCells))});
  max-height: calc(150px * ${props => Math.round(Math.sqrt(props.countOfCells))});
  width: calc(100% - 10px);
  height: 100%;
  z-index: 10;
`;

export const Cell = styled.div`
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export const GameCell = styled(Cell)<{drop: boolean}>`
  transition: all 250ms ease-in;
  box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  margin-top: ${props => props.drop ? "100%" : ""};
  :hover{
    cursor: pointer;
  }
`;

export const MoveField = styled.div<{ columnCount: number, countOfCells: number }>`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(${props => props.columnCount}, minmax(0,1fr));
  max-width: calc(150px * ${props => Math.round(Math.sqrt(props.countOfCells))});
  max-height: calc(150px * ${props => Math.round(Math.sqrt(props.countOfCells))});
  width: calc(100% - 10px);
  gap: 10px;
`;

export const MoveCell = styled(Cell)`
  padding-top: 100%;
  transition: all 250ms ease-in;
`;

export const PopUpMenuContainer = styled.div`
  font-family: "Quinquefive Wonv", serif;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PopUpMenuContent = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 10px;
`;

export const SettingButtonContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  margin: 20px;
`;

export const SettingButton = styled.button`
  font-family: "Quinquefive Wonv", serif;
  padding: 5px;
`;

export const SettingInputContainer = styled.div`
  display: grid;
  grid-template-areas: "text text"
                       "input value";
  gap: 20px;
  margin: 20px;
  width: 90%;
`;

export const SettingInputField = styled.input`
`;

export const SettingInputText = styled.p`
  margin: 0;
`;

export const GameStatusText = styled.p`
  position: absolute;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  flex-direction: column;
  top: 80px;
`;

export const GameStatusImage = styled.img`
  margin-top: -25%;
`;

export const ScoreContainer = styled.div`
  background: #bde0e8;
  position: absolute;
  border-radius: 10px;
  top: 0;
  left: 0;
  margin: 4px;
  padding: 5px;
`;
import React from 'react';
import * as ST from './styled';
import StartMenu from "./components/StartMenu";
import GameField from "./components/GameField";
import MoveField from "./components/MoveField";
import {ReactComponent as Refresh} from "./images/refresh.svg";
import {gameSlice} from "./store/reducers/GameSlice";
import {useAppDispatch} from "./hooks/redux";
import background from "./images/background.png";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";

const App: React.FC = () => {
    const {restartGame} = gameSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <ST.AppWrapper style={{ background: `url(${background})`, backgroundSize: "cover"}}>
            <StartMenu/>
            <Score/>
            <ST.RefreshButton onClick={() => dispatch(restartGame())}>
                <Refresh/>
            </ST.RefreshButton>
            <ST.Header>
                ЛАБИРИНТ
            </ST.Header>
            <GameStatus/>
            <GameField/>
            <MoveField/>
        </ST.AppWrapper>
    );
}

export default App;

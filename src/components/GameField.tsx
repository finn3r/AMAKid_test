import React from 'react';
import * as ST from "../styled";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {gameSlice} from "../store/reducers/GameSlice";
import cloud from "../images/cloud.png"
import start from "../images/start.png"

const GameField: React.FC = () => {
    const {countOfGameCells, cellStart, cellEnd, status} = useAppSelector(state => state.game);
    const {endGame} = gameSlice.actions;
    const dispatch = useAppDispatch();

    return (
        <ST.GameField countOfCells={countOfGameCells || 0}>
            {[...Array(countOfGameCells)].map((_, id) =>
                <ST.GameCell
                    drop={["lose", "win"].includes(status)}
                    style={{backgroundImage: `url(${id!==cellStart ? cloud : start})`}}
                    key={id}
                    onClick={() => (cellEnd===id) ? dispatch(endGame("win")) : dispatch(endGame("lose"))}
                />
            )}
        </ST.GameField>
    );
};

export default GameField;
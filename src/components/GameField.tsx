import React, {useEffect, useState} from 'react';
import * as ST from "../styled";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {gameSlice} from "../store/reducers/GameSlice";
import cloud from "../images/cloud.png"
import start from "../images/start.png"
import end from "../images/end.png"

const GameField: React.FC = () => {
    const [showError, setShowError] = useState(false);
    const [ready, setReady] = useState(false);
    const {countOfGameCells, cellStart, cellEnd, status, countOfMoveCells} = useAppSelector(state => state.game);
    const {endGame} = gameSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        switch (status) {
            case "in game":
                setTimeout(() => setReady(true), (800 + ((countOfMoveCells||1)-1) * 1000));
                break
            default:
                setReady(false);
                break
        }
    }, [countOfMoveCells, status]);

    useEffect(() => {
        if(showError)setTimeout(() => setShowError(false),500);
    },[showError]);

    return (
        <ST.GameField countOfCells={countOfGameCells || 0}>
            {[...Array(countOfGameCells)].map((_, id) =>
                <ST.GameCell
                    drop={["lose", "win"].includes(status)}
                    style={{backgroundImage: `url(${((status==="lose")&&(id === cellEnd)) ? end : (id === cellStart) ? start : cloud})`}}
                    key={id}
                    onClick={() => {
                        if(ready){
                            (cellEnd === id) ? dispatch(endGame("win")) : dispatch(endGame("lose"))
                        } else {
                            setShowError(true);
                        }
                    }}
                />
            )}
            {showError ? <ST.PopUpMenuContainer>
                <ST.PopUpMenuContent>
                    <p>
                        Подожди всех стерлочек!
                    </p>
                </ST.PopUpMenuContent>
            </ST.PopUpMenuContainer> : null}
        </ST.GameField>
    );
};

export default GameField;
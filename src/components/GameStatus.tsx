import React, {useEffect} from 'react';
import * as ST from '../styled';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {gameSlice} from "../store/reducers/GameSlice";
import fireworks from "../images/fireworks.gif"

const GameStatus: React.FC = () => {
    const {status} = useAppSelector(state => state.game);
    const {continueGame} = gameSlice.actions;
    const dispatch = useAppDispatch();

    useEffect(() => {
        if(["win", "lose"].includes(status)){
            setTimeout(() => {
                dispatch(continueGame());
            }, 900)
        }
    },[continueGame, dispatch, status]);

    return((["win", "lose"].includes(status)) ? (
        <ST.GameStatusText style={{color: (status==="win" ? "rgb(40,168,18)" : "tomato")}}>
            {(status==="win" ? "ПРАВИЛЬНО" : "НЕПРАВИЛЬНО")}
            <ST.GameStatusImage src={status==="win" ? fireworks : ""} width={"600px"} alt=""/>
        </ST.GameStatusText>
    ) : null);
};

export default GameStatus;
import React from 'react';
import * as ST from '../styled';
import {useAppSelector} from "../hooks/redux";

const Score: React.FC = () => {
    const {score} = useAppSelector(state => state.game);

    return ((score.false!==0||score.correct!==0) ? (
        <ST.ScoreContainer>
            <p style={{color: "rgb(40,168,18)"}}>
                Верно - {score.correct}
            </p>
            <p style={{color: "tomato"}}>
                Неверно - {score.false}
            </p>
        </ST.ScoreContainer>
    ) : null);
};

export default Score;
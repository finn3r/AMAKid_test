import React, {useState} from 'react';
import * as ST from '../styled';
import ReactDOM from "react-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {gameSlice} from "../store/reducers/GameSlice";

const modal_root = document.getElementById('modal-root') as HTMLElement;

const StartMenu: React.FC = () => {
    const [gameCells, setGameCells] = useState(9);
    const [moveCells, setMoveCells] = useState(10);
    const {status} = useAppSelector(state => state.game);
    const {startGame} = gameSlice.actions;
    const dispatch = useAppDispatch();

    return (status === "waiting" ? ReactDOM.createPortal(
        <ST.PopUpMenuContainer>
            <ST.PopUpMenuContent>
                <ST.SettingInputContainer>
                    <ST.SettingInputText style={{gridArea: "text"}}>
                        Введите кол-во ячеек поля
                    </ST.SettingInputText>
                    <ST.SettingInputField
                        style={{gridArea: "input"}}
                        type={"range"}
                        value={gameCells}
                        min={"1"} max={"16"}
                        onChange={(e) => setGameCells(Number(e.target.value))}
                    />
                    <ST.SettingInputText style={{gridArea: "value"}}>
                        {gameCells}
                    </ST.SettingInputText>
                </ST.SettingInputContainer>
                <ST.SettingInputContainer>
                    <ST.SettingInputText style={{gridArea: "text"}}>
                        Введите кол-во передвижений по полю
                    </ST.SettingInputText>
                    <ST.SettingInputField
                        style={{gridArea: "input"}}
                        type={"range"}
                        value={moveCells}
                        min={"1"} max={"16"}
                        onChange={(e) => setMoveCells(Number(e.target.value))}
                    />
                    <ST.SettingInputText style={{gridArea: "value"}}>
                        {moveCells}
                    </ST.SettingInputText>
                </ST.SettingInputContainer>
                <ST.SettingButtonContainer>
                    <ST.SettingButton
                        onClick={() => dispatch(startGame({countOfGameCells: gameCells, countOfMoveCells: moveCells}))}
                    >
                        НАЧАТЬ ИГРУ
                    </ST.SettingButton>
                </ST.SettingButtonContainer>
            </ST.PopUpMenuContent>
        </ST.PopUpMenuContainer>, modal_root) : null);
};

export default StartMenu;
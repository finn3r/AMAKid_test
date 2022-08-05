import React, {useEffect, useState} from 'react';
import * as ST from "../styled";
import {useAppSelector} from "../hooks/redux";
import Down from "../images/down.png";
import Up from "../images/up.png";
import Left from "../images/left.png";
import Right from "../images/right.png";
import MoveCell from "./MoveCell";

const MoveField: React.FC = () => {
    const {way, countOfGameCells, status} = useAppSelector(state => state.game);
    const [columnCount, setColumnCount] = useState(0);

    useEffect(() => {
        const widthHandler = () => {
            const cellMinWidth = 100;
            const width = 150 * Math.round(Math.sqrt(countOfGameCells||0));
            setColumnCount(Math.round((width > window.innerWidth ? window.innerWidth : width) / cellMinWidth));
        };
        window.addEventListener("resize", widthHandler);
        widthHandler();
        return () => {
            window.removeEventListener("resize", widthHandler);
        }
    }, [countOfGameCells]);

    return (
        <ST.MoveField columnCount={columnCount} countOfCells={countOfGameCells||0}>
            {way?.map((direction, id) => {
                    switch (direction) {
                        case "Вверх":
                            return <MoveCell key={id} status={status} delay={800 + id*1000} img={Up}/>
                        case "Вниз":
                            return <MoveCell key={id} status={status} delay={800 + id*1000} img={Down}/>
                        case "Влево":
                            return <MoveCell key={id} status={status} delay={800 + id*1000} img={Left}/>
                        case "Вправо":
                            return <MoveCell key={id} status={status} delay={800 + id*1000} img={Right}/>
                        default:
                            return null
                    }
                }
            )}
        </ST.MoveField>
    );
};

export default MoveField;
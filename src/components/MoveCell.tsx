import React, {useEffect, useState} from 'react';
import * as ST from "../styled";

const MoveCell: React.FC<{ img: string, key: number, delay: number, status: string }> = ({img, key, delay, status}) => {
    const [show, setShow] = useState(false);
    
    useEffect(() => {
        switch (status) {
            case "in game":
                setTimeout(() => setShow(true),delay);
                break
            default:
                setShow(false);
                break
        }
    },[delay, status])

    return (show ? (
        <ST.MoveCell key={key} style={{backgroundImage: `url(${img})`}}/>
    ) : null);
};

export default MoveCell;
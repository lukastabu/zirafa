import { useState } from "react";
import randColor from '../../Functions/randColor';

function BlueSquare() {

    const [bg, setBg] = useState('blue');
    const [border, setBorder] = useState(1);

    const changeBg = () => {
        setBg(c => c === 'blue' ? 'red' : 'blue');
    }

    const changeRand = () => {
        setBg(randColor());
    }

    const changeBorder = () => {
        setBorder(b => b === 10 ? 1 : 10);
    }

    return (
        <div className="kvadratas" style={
            {
                backgroundColor: bg,
                borderWidth: border + 'px'
            }
            }>
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>Change rand</button>
            <button onClick={changeBorder}>Change border</button>
        </div>
    )
}

export default BlueSquare;
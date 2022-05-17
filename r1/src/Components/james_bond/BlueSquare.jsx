import { useState } from "react";
import randColor from '../../Functions/randColor';

function BlueSquare() {

    const [bg, setBg] = useState('blue');

    const changeBg = () => {
        setBg(c => c === 'blue' ? 'red' : 'blue');
    }

    const changeRand = () => {
        setBg(randColor());
    }

    return (
        <div className="kvadratas" style={{backgroundColor: bg}}>
            <button onClick={changeBg}>Change</button>
            <button onClick={changeRand}>Change rand</button>
        </div>
    )
}

export default BlueSquare;
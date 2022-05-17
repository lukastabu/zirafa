import { useState } from "react";

function BlueSquare() {

    const [bg, setBg] = useState('blue');

    const changeBg = () => {
        setBg('red');
    }

    return (
        <div className="kvadratas" style={{backgroundColor: bg}}>
            <button onClick={changeBg}>Change Color</button>
        </div>
    )
}

export default BlueSquare;
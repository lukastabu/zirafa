import { useState } from 'react';
import './App.scss';

function App() {

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');
    const [one, setOne] = useState(1);

    const doShow = () => {
        setShow(s => !s);
    }

    const doShow1 = () => {
        setShow1(s => !s);
    }

    const makeRed = () => {
        setColor('red');
    }

    const makeYellow = () => {
        setColor('yellow');
    }

    const addOne = () => {
        setOne(o => o + 1);
    }

    const remOne = () => {
        setOne(o => o - 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                {
                    show ? <div className="blue-square" style={{background: color}}></div> : null
                }
                                {
                    show1 ? <div className="blue-square" style={{background: color}}></div> : null
                }
                <h1>HOOK {one}</h1>
                <button onClick={doShow}>Show/Hide 1</button>
                <button onClick={doShow1}>Show/Hide 2</button>
                <button onClick={makeRed}>Make Red</button>
                <button onClick={makeYellow}>Make Yellow</button>
                <button onClick={addOne}>Add One</button>
                <button onClick={remOne}>Remove One</button>
            </header>
        </div>
    );
}

export default App;

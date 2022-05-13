import { useState } from 'react';
import './App.css';

function App() {

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');

    const doShow = () => {
        setShow(s => !s);
    }

    const doShow1 = () => {
        setShow1(s => !s);
    }

    const makeRed = () => {
        setColor('red');
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
                <h1>HOOK</h1>
                <button onClick={doShow}>Show/Hide</button>
                <button onClick={doShow1}>Show/Hide</button>
                <button onClick={makeRed}>Make Red</button>
            </header>
        </div>
    );
}

export default App;

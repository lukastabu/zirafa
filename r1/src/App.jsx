import { useState } from 'react';
import './App.scss';

function App() {

    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [color, setColor] = useState('blue');
    const [one, setOne] = useState(1);

    const makeShow = what => {
        what ? setShow(s => !s) : setShow1(s => !s);
    }

    const doMath = number => setOne(o => o + number);
    

    const changeColor = color => setColor(color);


    return (
        <div className="App">
            <header className="App-header">
                {
                    show ? <div className="blue-square" style={{background: color}}>1</div> : null
                }
                                {
                    show1 ? <div className="blue-square" style={{background: color}}>2</div> : null
                }
                <h1>HOOK {one}</h1>
                <button onClick={() => makeShow(1)}>Show/Hide 1</button>
                <button onClick={() => makeShow(0)}>Show/Hide 2</button>
                <button onClick={() => changeColor('red')}>Make Red</button>
                <button onClick={() => changeColor('yellow')}>Make Yellow</button>
                <button onClick={() => changeColor('pink')}>Make Pink</button>
                <button onClick={() => doMath(1)}>Add One</button>
                <button onClick={() => doMath(-1)}>Remove One</button>
            </header>
        </div>
    );
}

export default App;

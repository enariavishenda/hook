import React, { useState} from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return (
        <div>
            <HookSwither />
        </div>
    )
}

const HookSwither = () => {

    const [ color, setColor ] = useState('gray')
    const [ font, setFontSize ] = useState(14)
    return (
        <div style={{
            padding: '10px',
            backgroundColor: color,
            fontSize: `${font}px`
        }}>
            Hi
            <button
                onClick={() => setColor('black')}>
                Dark
            </button>
            <button
                onClick={() => setColor('white')}>
                Light
            </button>
            <button //нужно знать прошлый стейт
                onClick={() => setFontSize((s) => s + 5)}>
                Font Size +
            </button>
        </div>
    )
}

export default App
import './App.css';
import Terminal from 'react-console-emulator'
import React from "react";
import Exchange from "./exchange";

const terminal = React.createRef()

const commands = {
    btc: {fn: (...args) => run('btc', args)},
    eth: {fn: (...args) => run('eth', args)}
}

function run(args) {
    const exchange = new Exchange()
    exchange
        .price()
        .then(price => terminal.current.pushToStdout(`${price}`))
        .catch(error => terminal.current.pushToStdout(`${error}`))

    return `${arguments[0] + arguments[1]}`
}

function App() {

    return (
        <Terminal
            ref={terminal}
            commands={commands}
            welcomeMessage={'Welcome to price terminal! Enter with command. E.g: btc'}
            promptLabel={'>'}
        />
    );
}

export default App;

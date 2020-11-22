import './App.css';
import Terminal from 'react-console-emulator'
import React from "react";
import CommandFlow from "./command-flow";

const terminal = React.createRef()

const commands = {
    btc: {fn: (...args) => run('btc', args)},
    eth: {fn: (...args) => run('eth', args)}
}

function run() {

    const commandFlow = new CommandFlow(arguments)

    commandFlow
        .execute()
        .then(price => terminal.current.pushToStdout(`${price}`))
        .catch(error => terminal.current.pushToStdout(`${error}`))

    return `Please wait ...`
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

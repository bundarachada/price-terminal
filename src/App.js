import './App.css';
import React from "react";
import CommandFlow from "./command-flow";
import Terminal from 'terminal-in-react';

// const commands = {
//     btc: {fn: (...args) => run('btc', args)},
//     eth: {fn: (...args) => run('eth', args)}
// }
//
function run(cmd, print) {

    const commandFlow = new CommandFlow(cmd)

    commandFlow
        .execute()
        .then(price => print(`${price}`))
        .catch(error => print(`${error}`))
}

function App() {

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{fontWeight: "bold", fontSize: "1em"}}
                msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'
                commandPassThrough={(cmd, print) => {
                    run(cmd, print)
                }}
            />
        </div>
    );
}

export default App;

import './App.css';
import React from "react";
import CommandFlow from "./command-flow";
import Terminal from 'terminal-in-react';

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
                hideTopBar='true'
                barColor='black'
                startState='maximised'
                allowTabs='false'
                style={{fontWeight: "bold", fontSize: "1.2em"}}
                msg='You can write coin to check price in USD. Example - btc'
                commandPassThrough={(cmd, print) => {
                    run(cmd, print)
                }}
            />
        </div>
    );
}

export default App;

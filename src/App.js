import './App.css';
import Terminal from 'terminal-in-react';
import React from "react";

function App() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{fontWeight: "bold", fontSize: "1em"}}
                commands={{
                    btc: {
                        method: (args, print, runCommand) => {
                            print(`The price is ${args._[0] || args.color} ${runCommand}`);
                        },
                        options: [
                            {
                                name: 'color',
                                description: 'The color the output should be',
                                defaultValue: 'white',
                            },
                        ],
                    },
                }}
                msg='You can write anything here. Example - Hello! My name is Foo and I like Bar.'/>
        </div>
    );
}

export default App;

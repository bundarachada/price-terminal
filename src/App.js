import './App.css';
import Terminal from 'terminal-in-react';
import React from "react";

const Binance = require('node-binance-api');
const binance = new Binance()

function App() {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <Terminal
                color='green'
                backgroundColor='black'
                barColor='black'
                style={{fontWeight: "bold", fontSize: "1em"}}
                commandPassThrough={ (cmd, print) => {
                    binance.prices('BTCUSDT', (error, ticker) => {
                        print(`${ticker.BTCUSDT}`);
                    });

                }}
                msg='Enter with coin to check USD price.'/>
        </div>
    );
}

export default App;

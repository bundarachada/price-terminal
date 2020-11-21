import './App.css';
import Terminal from 'react-console-emulator'
import React from "react";

const Binance = require('node-binance-api');
const binance = new Binance()
const terminal = React.createRef()
const commands = {
  btc: {
    description: 'Echo a passed string.',
    usage: 'echo <string>',
    fn: function () {

      binance.prices('BTCUSDT', (error, ticker) => {
        terminal.current.pushToStdout(`${ticker.BTCUSDT}`)
      });
      return `Running, please wait...`
    }
  }
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

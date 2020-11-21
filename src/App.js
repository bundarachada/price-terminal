import './App.css';
import Terminal from 'react-console-emulator'
import React from "react";
import Exchange from "./exchange";



const terminal = React.createRef()
const commands = {
    btc: {
        description: 'Echo a passed string.',
        usage: 'echo <string>',
        fn: function () {
            const exchange = new Exchange()

            exchange
                .price()
                .then(price => terminal.current.pushToStdout(`${price}`))
                .catch(error => terminal.current.pushToStdout(`${error}`))



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

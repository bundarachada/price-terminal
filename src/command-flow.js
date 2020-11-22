import Exchange from "./exchange";

const exchange = new Exchange()

class CommandFlow {

    constructor(args) {
        this.args = args
    }

    async execute() {
        if (only1arg(this.args)) {
            return getPriceDefaultCoin(this.args[0])
        }
        return `Nothing ...`
    }

}

function only1arg(args) {
    return args[1].length === 0
}

async function getPriceDefaultCoin(coin) {
    console.log(coin)
    if (validateCoin(coin)) {
        const pair = `${coin}USDT`.toUpperCase()
        return await exchange.price(pair)
    }
    return `Error, try again ...`
}

function validateCoin(coin) {
    return typeof coin !== "number"
}

export default CommandFlow

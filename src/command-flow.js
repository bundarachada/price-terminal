import Exchange from "./exchange";

const exchange = new Exchange()

class CommandFlow {

    constructor(cmd) {
        this.cmd = cmd
    }

    async execute() {
        if (only1arg(this.cmd)) {
            return getPriceDefaultCoin(this.cmd[0])
        }

        if (secondArgIsNumber(this.cmd)) {
            return calculateAmount(this.cmd)
        }

        return `Nothing ...`
    }

}

function only1arg(cmd) {
    return cmd.length === 1
}

function secondArgIsNumber(args) {
    return !isNaN(args[1][0])
}

async function getPriceDefaultCoin(coin) {
    if (validateCoin(coin)) {
        const pair = `${coin}USDT`.toUpperCase()
        return await exchange.price(pair)
    }
    return `Error, try again ...`
}

async function calculateAmount(args) {
    const price = await getPriceDefaultCoin(args[0])
    const quantity = args[1][0]
    return Number(price) * Number(quantity);
}

function validateCoin(coin) {
    return typeof coin !== "number"
}

export default CommandFlow

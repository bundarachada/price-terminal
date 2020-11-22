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

function secondArgIsNumber(cmd) {
    return !isNaN(cmd[1])
}

async function getPriceDefaultCoin(coin) {
    if (validateCoin(coin)) {
        const pair = `${coin}USDT`.toUpperCase()
        return await exchange.price(pair)
    }
    return `Error, try again ...`
}

async function calculateAmount(cmd) {
    const price = await getPriceDefaultCoin(cmd[0])
    const quantity = cmd[1]
    return Number(price) * Number(quantity);
}

function validateCoin(coin) {
    return typeof coin !== "number"
}

export default CommandFlow

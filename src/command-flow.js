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

        if (secondArgIsNumber(this.args)) {
            return calculateAmount(this.args)
        }

        return `Nothing ...`
    }

}

function only1arg(args) {
    return args[1].length === 0
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

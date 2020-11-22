class Exchange {

    async price(pair) {
        return binancePrice(pair)
    }

}

function binancePrice(pair) {

    return fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${pair}`)
        .then(response => response.json())
        .then(data => data.price)
}

export default Exchange

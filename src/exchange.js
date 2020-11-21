class Exchange {

    async price() {
        return binancePrice()
    }

}

function binancePrice() {

    return fetch('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT')
        .then(response => response.json())
        .then(data => data.price)
}

export default Exchange

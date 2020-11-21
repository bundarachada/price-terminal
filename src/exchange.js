import Binance from 'node-binance-api'


class Exchange {

    async price() {
        const binance = new Binance()
        const ticker = await binance.prices('BTCUSDT');
        return ticker.BTCUSDT
    }

}

export default Exchange

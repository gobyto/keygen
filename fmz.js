function main(){
    var ticker = exchange.GetTicker()
    if(!ticker){
        // 重新调用一次，或者其它处理逻辑
        ticker = exchange.GetTicker()
    }
    /*
        可能由于网络原因，访问不到交易所接口（即使托管者程序所在设备能打开交易所网站，但是API接口也可能访问不通）
        此时ticker为null，当访问ticker.High时，会导致错误，所以在测试该代码时，确保可以访问到交易所接口
    */
    Log("High:", ticker.High, "Low:", ticker.Low, "Sell:", ticker.Sell, "Buy:", ticker.Buy, "Last:", ticker.Last, "Volume:", ticker.Volume)
}

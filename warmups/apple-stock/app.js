var getMaxProfit = function (stockPrices) {
    var maxProfit = Number.NEGATIVE_INFINITY;
    var buyPrice = 0;
    var sellPrice = 0;
    for (var i = 0; i < stockPrices.length; i++) {
        var buyPrice = stockPrices[i];
        for (var j = i + 1; j < stockPrices.length; j++) {
            sellPrice = stockPrices[j];
            var profit = sellPrice - buyPrice;
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
//var stockPricesYesterday = [10, 9, 7, 6, 5, 4];

console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)


var getMaxProfit = function (stockPrices) {
    var mapped = stockPrices.map(function (obj, i) {
        return {
            price: obj,
            index: i
        }
    })

    var sorted = mapped.sort(function (a, b) {
        if (a.index < b.index) {
            console.log(a.index + " " + b.index);
            return a.price - b.price;
        } else {
            return -1;
        }
    });
    console.log(sorted);
    //
    // for (var i = sorted.length - 1; i >= 0; sorted--) {
    //     var maxProfit = Number.NEGATIVE_INFINITY;
    //     var profit = sorted[i].price - sorted[0].price;
    //     if (profit > maxProfit && sorted[i].index > sorted[0].index
    //         }
}

//console.log(getMaxProfit(stockPricesYesterday));
// returns 6 (buying for $5 and selling for $11)
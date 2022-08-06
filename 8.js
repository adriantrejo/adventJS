function maxProfit(prices) {
  let maxProfit = -1;
  prices.forEach((price, index) => {
      const possiblePricesofSell = prices.slice(index + 1);
      const pricesOfSell = possiblePricesofSell.filter(priceOfSell => priceOfSell > price);
      const bestSellPrice = Math.max(...pricesOfSell);
      console.log('maxPossibleProfit: ', bestSellPrice);
      if (bestSellPrice-price > maxProfit) {
        maxProfit = bestSellPrice-price;
      };
    });
    console.log('maxProfit: ', maxProfit);
    return maxProfit;
}
  const pricesBtc = [39, 18, 29, 25, 34, 32, 5]
  maxProfit(pricesBtc) // -> 16 (compra a 18, vende a 34)
  
  const pricesEth = [10, 20, 30, 40, 50, 60, 70]  
  maxProfit(pricesEth) // -> 60 (compra a 10, vende a 70)

  const pricesDoge = [18, 15, 12, 11, 9, 7]
  maxProfit(pricesDoge)  // -> -1 (no hay ganancia posible)
  
  const pricesAda = [3, 3, 3, 3, 3]
  maxProfit(pricesAda)  // -> -1 (no hay ganancia posible)
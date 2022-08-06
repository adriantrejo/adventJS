function getCoins(change) {
  let coins = [1,2,5,10,20,50];
  let coinsReturned = new Array(6).fill(0);
  let more = true;
  let i = 5;
  while (more) {
    if (change >= coins[i]){
      change = change - coins[i];
      coinsReturned[i]++;
    }
    else if (i>0){
      i--;
    }
    else{
      more = false;
    }
  }
  return coinsReturned;
}

getCoins(51) // [1, 0, 0, 0, 0, 1] -> una moneda de 1 céntimo y otra de 50 céntimos
getCoins(3) // [1, 1, 0, 0, 0, 0] -> una moneda de 1 céntimo y otra de 2
getCoins(5) // [0, 0, 1, 0, 0, 0] -> una moneda de 5 céntimos
getCoins(16) // [1, 0, 1, 1, 0, 0] -> una moneda de 1 céntimo, una de 5 y una de 10
getCoins(100) // [0, 0, 0, 0, 0, 2] -> dos monedas de 50 céntimos
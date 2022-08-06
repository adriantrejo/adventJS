function decodeNumbers(symbols) {
  let map = new Map();
  let sum = 0;
  map.set('.', 1);
  map.set(',', 5);
  map.set(':', 10);
  map.set(';', 50);
  map.set('!', 100);
  for (let i = symbols.length -1; i >=0 ; i--) {
    const currentNumber = map.get(symbols[i]);
    const previousNumber = map.get(symbols[i + 1]);
    if (previousNumber === undefined){
      sum += currentNumber
    }
    else{
      if (previousNumber > currentNumber){
        sum-= currentNumber
      }
      else{
        sum+= currentNumber
      }
    }
  }
  return sum;
}

decodeNumbers('...') // 3
decodeNumbers('.,') // 4 (5 - 1) 
decodeNumbers(',.') // 6 (5 + 1)
decodeNumbers(',...') // 8 (5 + 3)
decodeNumbers('.........!') // 107 (1 + 1 + 1 + 1 + 1 + 1 + 1 - 1 + 100)
decodeNumbers('.;') // 49 (50 - 1)
decodeNumbers('..,') // 5 (-1 + 1 + 5)
decodeNumbers('..,!') // 95 (1 - 1 - 5 + 100)
decodeNumbers('.;!') // 49 (-1 -50 + 100)
decodeNumbers('!!!') // 300
decodeNumbers(';!') // 50
decodeNumbers(';.W') // NaN
function shouldBuyFidelity(times) {
  const priceWithoutDiscount = 12*times;
  let sum = 250;
  for (let i = 0; i<times; i++){
    sum = sum + 12*Math.pow(0.75, i+1);
  }
  console.log(priceWithoutDiscount < sum ? false : true);
  const color = new vscode.ThemeColor('badge.background');
  console.log(color);
}

shouldBuyFidelity(3) // false -> Mejor comprar tickets de un sólo uso
shouldBuyFidelity(100) // true -> Mejor comprar tarjeta fidelidad
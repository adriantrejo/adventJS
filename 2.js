function listGifts(letter) {
  const gifts = letter.split(' ');
  const giftsFiltered = gifts.filter( (gift) =>  gift!= '' && !gift.includes('_'));
  let countGifts = [];
  let uniqueGifts = [];
  giftsFiltered.forEach( (gift) => {
      if (!uniqueGifts.includes(gift)){
          uniqueGifts.push(gift);
          countGifts.push(0);
      }
      const index = uniqueGifts.indexOf(gift);
      countGifts[index] += 1;
  });
  let object = {};
  uniqueGifts.forEach((k,i) => object[k] = countGifts[i]);
  return object;
}
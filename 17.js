function countPackages(carriers, carrierID) {
   let sum = 0;
   const carrier = carriers.filter(carrier => carrier[0] === carrierID);
   const subCarriers = carrier[0][2];
   if (subCarriers.length === 0) {
      sum += carrier[0][1];
      console.log(sum);
      return sum;
   }
   else{
      for (let i = 0; i < subCarriers.length; i++) {
         sum += countPackages(carriers, subCarriers[i]);
      }
      sum += carrier[0][1];
      console.log(sum);
      return sum;
   }
  }
 

 const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
]

countPackages(carriers, 'dapelu') // 9
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
]

countPackages(carriers2, 'camila') // 15
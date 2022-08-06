function wrapGifts(gifts) {
  let wrap = [];
  const length = gifts[0].length;
  wrap.push('*'.repeat(length + 2));
  for (let i = 0; i < gifts.length; i++) {
    wrap.push('*' + gifts[i] + '*');
  }
  wrap.push('*'.repeat(length + 2));
  return wrap;
}

//wrapGifts(["📷", "⚽️"])
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

wrapGifts(["🏈🎸", "🎮🧸"])
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

wrapGifts(["📷"])
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/
function pangram(letter) {
   let count = letter.includes('ñ') || letter.includes('Ñ') ? 1 : 0;
   letter.replace('N', 'ñ').replace('n', 'ñ');
   letter = letter.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
   const alphabetRegex = /[A-Za-z]/gi;
   const unique = [...new Set(letter.match(alphabetRegex))];
   const uniqueLength = unique.sort().length;
   return uniqueLength + count === 27;
  }

pangram('abcdefghijklmnñopqrstuvwxyz'); // true
pangram('ExtraÑo pan de cöl y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las leetras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
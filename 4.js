function isValid(letter) {
    if (letter.includes('()')) return false;
      let valid = true;
      let betweenParenthesis = [];
      let foundParenthesis = false;
      let charsBetweenParenthesis = '';
      for (var i = 0; i< letter.length; i++){
        const char = letter[i];
        if (char =='('){
            foundParenthesis = true;
        }
        if (foundParenthesis){
            charsBetweenParenthesis+=char;
        }
        if (!foundParenthesis && char == ')'){
            return false;
        }
        if (char == ')'){
            betweenParenthesis.push(charsBetweenParenthesis);
            charsBetweenParenthesis = '';
            foundParenthesis = false;
        }
      }
      betweenParenthesis.forEach( (word)=>{
        const regex = /{|}|\[|\]/;
        if(regex.test(word)) valid = false;
      })
      return charsBetweenParenthesis != '' ? false : valid;
    }
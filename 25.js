function canMouseEat(direction, game) {
  let iPositionMouse = -1;
  let jPositionMouse = -1;
  for (let i = 0; i < game.length; i++) {
    for (let j = 0; j < game[i].length; j++) {
      if (game[i][j] === 'm') {
        iPositionMouse = i;
        jPositionMouse = j;
      }
    }
  }
  //Check up the direction
  if (direction == 'up' && iPositionMouse-1 >= 0) {
    return game[iPositionMouse - 1][jPositionMouse] === '*';
  }
  if(direction == 'down' && iPositionMouse+1 < game.length) {
    return game[iPositionMouse + 1][jPositionMouse] === '*';
  }
  if (direction == 'left' && jPositionMouse-1 >= 0) {
    return game[iPositionMouse][jPositionMouse - 1] === '*';
  }
  if (direction == 'right' && jPositionMouse+1 < game[0].length) {
    return game[iPositionMouse][jPositionMouse + 1] === '*';
  }
  return false;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false

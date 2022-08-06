function canReconfigure(from, to) {
    if (from.length != to.length) return false;
    let map = {};
    for (let i = 0; i < from.length; i++) {
        //Busco en el map si ya esta la clave y no es la identidad
        if (map[from[i]] && from[i]!= to[i] && map[from[i]] != to[i]) {
            return false;
        }
        //Busco el valor inverso en el map y veo si es del tipo {A,B} y {B,A}
        const inverseValue = Object.keys(map).find(key => key == to[i]);
        if (inverseValue != to[i] && inverseValue != undefined) {
            return false;
        }
        //Miro si se ha asignado un valor al to[i] y no es la funcion identidad
        const findToValue = Object.values(map).find(value => value == to[i]);
        if (findToValue == to[i] && findToValue != undefined && from[i] != to[i] && map[from[i]] != to[i]) {
            return false;
        }
        map[from[i]] = to[i];
    }
    return true;
 }
     
// const from = 'BAL'
// const to   = 'LIB'
// console.log(canReconfigure(from, to)) // true
// const from1 = 'CON'
// const to1   = 'JUU'
// console.log(canReconfigure(from1, to1));// false
// const from2= 'XBOX'
// const to2   = 'XXBO'
// abcdefghijkl
// lkjihgfedcba
// const to3   = 'XOBX'
// console.log(canReconfigure(from3, to3)) // true
// const from4 = 'MMM'
// const to4   = 'MID'
// console.log(canReconfigure(from4, to4)) // false
// const from5 = 'AA'
// const to5   = 'MID'
console.log(canReconfigure('xxxMMM','aaaDDD'));


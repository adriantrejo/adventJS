function groupBy(collection, it) {
  let obj = {};
    collection.forEach(element => {
      const evaluate = typeof it === 'function' ? it(element) : element[it];
      if (obj[evaluate] === undefined) {
        let array = [];
        array.push(element);
        Object.assign(obj, {[evaluate]: array});
      }
      else{
        obj[evaluate].push(element);
      }
    });
  return obj;
}

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }
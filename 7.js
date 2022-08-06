function contains(store, product) {
    let result = false;
    Object.keys(store).forEach((key) => { 
        if (typeof store[key] === 'object') {
            result = contains(store[key], product);
        } 
        else {
          const values = Object.values(store);
          if (values.includes(product)) { 
            result = true;
          };
        };
    });
    console.log('result: ', result);
    return result;
  }

  const otroAlmacen = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
    
  contains(otroAlmacen, 'game') // false


import addTocart  from  './shoppingCart.js';
// const addTocart  = require('./shoppingCart.js');
const message = addTocart('bread', 5);

document.getElementById('message').innerHTML=message;
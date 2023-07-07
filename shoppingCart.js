const cart=[];
export default function(product, quantity){
    cart.push( { product, quantity});
    const message = `${quantity} ${product} added to cart`;
    console.log(message);
    return message;
}

// module.exports = addToCart;
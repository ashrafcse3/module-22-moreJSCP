// calculate the sum for all prices list
const shoppingCart = [
    { name: 'shirt', price: 2200, quantity: 5 },
    { name: 'pant', price: 2000, quantity: 5 },
    { name: 'Sika genji', price: 500, quantity: 3 },
    { name: 'Juta', price: 1800, quantity: 5 },
];

function getTotalCartPriceWithQ(cartList) {
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
        let element = cartList[i];
        let priceWithQ = element.price * element.quantity;
        sum = sum + priceWithQ;
    }
    return sum;
}

const totalCartPriceWithQ = getTotalCartPriceWithQ(shoppingCart);
console.log(totalCartPriceWithQ);
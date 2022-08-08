// calculate the sum for all prices list
const shoppingCart = [
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 2000 },
    { name: 'Sika genji', price: 500 },
    { name: 'Juta', price: 1800 }
];

function getTotalCartPrice(cartList) {
    let sum = 0;
    for (let i = 0; i < cartList.length; i++) {
        let element = cartList[i];
        sum = sum + element.price;
    }
    return sum;
}

const totalCartPrice = getTotalCartPrice(shoppingCart);
console.log(totalCartPrice);
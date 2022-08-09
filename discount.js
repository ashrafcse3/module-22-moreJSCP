/**
 * 1.If you purchase less than or equal to 100 ticket, then it will be 100tk per piece,
 * 2.If you purchase more than 100, but less than 200, then it will 90tk per ticket.
 * 3.If you buy more than 200 ticket,
 *      first 100 ---> 100tk
 *      101-200 ---> 90tk
 *      200+ ----> 70tk
 */

function getTicketPrice(number) {
    const first100Rate = 100;
    const second100Rate = 90;
    const moreThan200 = 70;
    let totalTicketPrice = 1;

    if (number <= 100) {
        totalTicketPrice = first100Rate * number;
    }
    else if (number <= 200) {
        totalTicketPrice = first100Rate * 100;
        totalTicketPrice = totalTicketPrice + second100Rate * (number - 100);
    }
    else {
        totalTicketPrice = first100Rate * 100;
        totalTicketPrice = totalTicketPrice + second100Rate * 100;
        totalTicketPrice = totalTicketPrice + moreThan200 * (number - 200);
    }
    return totalTicketPrice;
}

const ticketWantsToBuy = 201;
const priceOfAllTicket = getTicketPrice(ticketWantsToBuy);
console.log(priceOfAllTicket);
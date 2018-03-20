function Order() {
    this.iceCreams = []
}

Order.prototype.addIceCream = function(iceCream) {
    // eslint-disable-next-line no-undef
    if (!(iceCream instanceof IceCream)) {
        throw new TypeError('to add an iceCream, it must be an IceCream')
    }

    this.iceCreams.push(iceCream)
}

Order.prototype.getPrice = function() {
    return this.iceCreams
        .map(i => i.getPrice())
        .reduce((totalPrice, price) => totalPrice + price, 0)
}

export default Order

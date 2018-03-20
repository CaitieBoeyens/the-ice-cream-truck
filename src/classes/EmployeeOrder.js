import Order from './Order'
function EmployeeOrder() {
    Order.call(this)

    this.discountMultiplier = 0.8
}

EmployeeOrder.prototype = Object.create(Order.prototype)

EmployeeOrder.prototype.getPrice = function() {
    return (
        this.iceCreams
            .map(i => i.getPrice())
            .reduce((totalPrice, price) => totalPrice + price, 0) *
        this.discountMultiplier
    )
}
export default EmployeeOrder

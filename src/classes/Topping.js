import SubComponent from './SubComponent'

function Topping(name, price, topping) {
    SubComponent.call(this, name, price)
    this.topping = topping
}

Topping.prototype = Object.create(SubComponent.prototype)
export default Topping

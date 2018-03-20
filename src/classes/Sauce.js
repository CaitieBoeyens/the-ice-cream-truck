import SubComponent from './SubComponent'

function Sauce(name, price) {
    SubComponent.call(this, name, price)
}

Sauce.prototype = Object.create(SubComponent.prototype)

export default Sauce

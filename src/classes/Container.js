import SubComponent from './SubComponent'

function Container(name, price, numScoops, size) {
    SubComponent.call(this, name, price)

    this.numScoops = numScoops
    this.size = size
}

Container.prototype = Object.create(SubComponent.prototype)

Container.prototype.getName = function(containers) {
    return `${this.size} ${this.name}`
}

export default Container

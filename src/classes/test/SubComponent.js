function SubComponent(name, price) {
    this.name = name
    this.price = price
}

SubComponent.prototype.getName = function() {
    return this.name
}
SubComponent.prototype.getPrice = function() {
    return this.price
}

module.exports = SubComponent

const SubComponent = require('./SubComponent')

function Flavour(name, price) {
    SubComponent.call(this, name, price)
}

Flavour.prototype = Object.create(SubComponent.prototype)

Flavour.prototype.getPrice = function(numScoops) {
    return this.price * numScoops
}
module.exports = Flavour

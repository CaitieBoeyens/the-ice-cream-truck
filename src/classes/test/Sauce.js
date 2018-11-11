const SubComponent = require('./SubComponent')

function Sauce(name, price) {
    SubComponent.call(this, name, price)
}

Sauce.prototype = Object.create(SubComponent.prototype)

module.exports = Sauce

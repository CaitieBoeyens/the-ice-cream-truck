import Container from './Container'
import Flavour from './Flavour'
import Topping from './Topping'
import Sauce from './Sauce'
import IceCream from './IceCream'

function Store(containers, flavours, toppings, sauces, order) {
    this.containers = this.makeContainers(
        this.transformContainersList(containers)
    )
    this.flavours = this.makeFlavours(flavours)
    this.toppings = this.makeToppings(toppings)
    this.sauces = this.makeSauces(sauces)
    this.order = order

    this.currentlyselected = {
        container: null,
        flavour: null,
        toppings: [],
        sauce: null,
        containerSize: null,
        containerType: null
    }

    this.currentIceCream = null
}

Store.prototype.resetCurrentSelections = function() {
    this.currentlyselected = {
        container: null,
        flavour: null,
        toppings: [],
        sauce: null,
        containerSize: null,
        containerType: null
    }

    this.currentIceCream = null
}

Store.prototype.addIceCreamToOrder = function() {
    this.order.addIceCream(this.currentIceCream)
    this.resetCurrentSelections()
}

// Store.prototype.makeIceCreamIfValid = function() {
//     const c = this.currentlyselected
//     if (!c.container || !c.flavour) {
//         this.currentIceCream = null
//     } else {
//         this._makeNewIceCream()
//     }
// }

// Store.prototype._makeNewIceCream = function() {
//     const c = this.currentlyselected
//     this.currentIceCream = new IceCream(
//         c.container,
//         c.flavour,
//         c.toppings,
//         c.sauce
//     )
// }

// Store.prototype.transformContainersList = function(containers) {
//     return containers
//         .map(function(container) {
//             return container.sizes.map(function(size) {
//                 return Object.assign(
//                     {
//                         name: container.name
//                     },
//                     size
//                 )
//             })
//         })
//         .reduce(function(containers, containerList) {
//             return containers.concat(containerList)
//         }, [])
// }

// Store.prototype.makeContainers = function(containers) {
//     return containers.map(function(newContainer) {
//         return new Container(
//             newContainer.name,
//             newContainer.price,
//             newContainer.numScoops,
//             newContainer.size
//         )
//     })
// }

// Store.prototype.makeFlavours = function(flavours) {
//     return flavours.map(function(newFlavour) {
//         return new Flavour(newFlavour.name, newFlavour.price)
//     })
// }

// Store.prototype.makeToppings = function(toppings) {
//     return toppings.map(function(newTopping) {
//         return new Topping(
//             newTopping.name,
//             newTopping.price,
//             newTopping.topping
//         )
//     })
// }

// Store.prototype.makeSauces = function(sauces) {
//     return sauces.map(function(newSauce) {
//         return new Sauce(
//             newSauce.name,
//             newSauce.price,
//             newSauce.numScoops,
//             newSauce.size
//         )
//     })
// }

// Store.prototype.setSelectedContainerSize = function(size) {
//     this.currentlyselected.containerSize = size
//     this._setSelectedContainer()
// }

// Store.prototype.setSelectedContainerType = function(type) {
//     this.currentlyselected.containerType = type
//     this._setSelectedContainer()
// }

// Store.prototype._setSelectedContainer = function() {
//     const size = this.currentlyselected.containerSize
//     const type = this.currentlyselected.containerType
//     if (!(size && type)) {
//         this.currentlyselected.container = null
//     } else {
//         this.currentlyselected.container = this._findContainer(size, type)
//     }
//     this.makeIceCreamIfValid()
// }

// Store.prototype._findContainer = function(size, type) {
//     return this.containers.find(function(container) {
//         return container.getName() === `${size} ${type}`
//     })
// }

// Store.prototype.setSelectedFlavour = function(flavourName) {
//     this.currentlyselected.flavour =
//         this.flavours.find(f => f.name === flavourName) || null
//     this.makeIceCreamIfValid()
// }

// Store.prototype.setSelectedTopping = function(toppingName) {
//     const toppings = this.currentlyselected.toppings
//     const toppingIndex = toppings.findIndex(t => t.name === toppingName)
//     if (toppingIndex !== -1) {
//         toppings.splice(toppingIndex, 1)
//     } else if (toppings.length === 2) {
//         toppings.shift()
//         toppings.push(this.toppings.find(t => t.name === toppingName))
//     } else {
//         toppings.push(this.toppings.find(t => t.name === toppingName))
//     }
//     this.makeIceCreamIfValid()
// }
// Store.prototype.setSelectedSauce = function(sauceName) {
//     this.currentlyselected.sauce =
//         this.sauces.find(s => s.name === sauceName) || null
//     this.makeIceCreamIfValid()
// }

export default Store

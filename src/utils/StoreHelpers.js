import Container from '../classes/Container'
import Flavour from '../classes/Flavour'
import Topping from '../classes/Topping'
import Sauce from '../classes/Sauce'

export default class Store {
    static findContainer(containers, size, type) {
        return containers.find(function(container) {
            return container.getName() === `${size} ${type}`
        })
    }
    static transformContainersList(containers) {
        return containers
            .map(function(container) {
                return container.sizes.map(function(size) {
                    return Object.assign(
                        {
                            name: container.name
                        },
                        size
                    )
                })
            })
            .reduce(function(containers, containerList) {
                return containers.concat(containerList)
            }, [])
    }
    static makeContainers(containers) {
        return containers.map(function(newContainer) {
            return new Container(
                newContainer.name,
                newContainer.price,
                newContainer.numScoops,
                newContainer.size
            )
        })
    }

    static makeFlavours(flavours) {
        return flavours.map(function(newFlavour) {
            return new Flavour(newFlavour.name, newFlavour.price)
        })
    }

    static makeToppings(toppings) {
        return toppings.map(function(newTopping) {
            return new Topping(
                newTopping.name,
                newTopping.price,
                newTopping.topping
            )
        })
    }

    static makeSauces(sauces) {
        return sauces.map(function(newSauce) {
            return new Sauce(
                newSauce.name,
                newSauce.price,
                newSauce.numScoops,
                newSauce.size
            )
        })
    }
}

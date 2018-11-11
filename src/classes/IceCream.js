function IceCream(container, flavour, toppings, sauce) {
    this.container = container
    this.flavour = flavour
    this.toppings = toppings
    this.sauce = sauce
}

IceCream.prototype.getName = function() {
    const toppingNames = this.toppings
        .map(t => t.getName())
        .reduce((nameString, name) => `${nameString} ${name}`, '')

    const sauce = this.sauce ? this.sauce.getName() : ''

    return `${this.container.size}
        ${sauce}
        ${toppingNames}
        ${this.flavour.getName()}
        ${this.container.name}`.replace(/\s+/g, ' ')
}

IceCream.prototype.getPrice = function() {
    const toppingPrice = this.toppings
        .map(t => t.getPrice())
        .reduce((totalPrice, price) => totalPrice + price, 0)

    const saucePrice = this.sauce ? this.sauce.getPrice() : 0

    return (
        this.container.getPrice() +
        this.flavour.getPrice(this.container.numScoops) +
        toppingPrice +
        saucePrice
    )
}

export default IceCream

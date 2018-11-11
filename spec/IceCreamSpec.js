/* eslint-disable no-undef */

describe('IceCream', function() {
    const Order = require('../src/classes/test/Order')
    const Store = require('../src/classes/test/Store')
    const Data = require('../src/data/test')
    beforeEach(function() {
        this.order = new Order()
        this.store = new Store(
            Data.containers,
            Data.flavours,
            Data.toppings,
            Data.sauces
        )
    })
    it('should generate correct name with 1 topping', function() {
        this.store.setSelectedContainerSize('small')
        this.store.setSelectedContainerType('cup')
        this.store.setSelectedFlavour('vanilla')
        this.store.setSelectedTopping('rainbow')
        expect(this.store.currentIceCream.getName()).toEqual(
            'small rainbow vanilla cup'
        )
    })
    it('should generate correct price with 1 topping', function() {
        this.store.setSelectedContainerSize('small')
        this.store.setSelectedContainerType('cup')
        this.store.setSelectedFlavour('vanilla')
        this.store.setSelectedTopping('rainbow')
        expect(this.store.currentIceCream.getPrice()).toEqual(11.75)
    })

    it('should generate correct name with 2 toppings and a sauce', function() {
        this.store.setSelectedContainerSize('large')
        this.store.setSelectedContainerType('waffle-cone')
        this.store.setSelectedFlavour('chocolate')
        this.store.setSelectedTopping('nutty')
        this.store.setSelectedTopping('ninety-nine')
        this.store.setSelectedSauce('hot fudge')
        expect(this.store.currentIceCream.getName()).toEqual(
            'large hot fudge nutty ninety-nine chocolate waffle-cone'
        )
    })
    it('should generate correct price with 2 toppings and a sauce', function() {
        this.store.setSelectedContainerSize('large')
        this.store.setSelectedContainerType('waffle-cone')
        this.store.setSelectedFlavour('chocolate')
        this.store.setSelectedTopping('nutty')
        this.store.setSelectedTopping('ninety-nine')
        this.store.setSelectedSauce('hot fudge')
        expect(this.store.currentIceCream.getPrice()).toEqual(37.25)
    })
})

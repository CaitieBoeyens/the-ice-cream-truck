module.exports.containers = [
    {
        name: 'cup',
        sizes: [
            {
                size: 'small',
                numScoops: 1,
                price: 6.0
            },
            {
                size: 'large',
                numScoops: 2,
                price: 12.0
            },
            {
                size: 'mega',
                numScoops: 3,
                price: 18.0
            }
        ]
    },
    {
        name: 'cone',
        sizes: [
            {
                size: 'small',
                numScoops: 1,
                price: 8.0
            },
            {
                size: 'large',
                numScoops: 2,
                price: 15.0
            },
            {
                size: 'mega',
                numScoops: 3,
                price: 22.0
            }
        ]
    },
    {
        name: 'waffle-cone',
        sizes: [
            {
                size: 'small',
                numScoops: 1,
                price: 9.0
            },
            {
                size: 'large',
                numScoops: 2,
                price: 16.0
            },
            {
                size: 'mega',
                numScoops: 3,
                price: 24.0
            }
        ]
    }
]

module.exports.flavours = [
    {
        name: 'vanilla',
        price: 2.25
    },
    {
        name: 'chocolate',
        price: 3.0
    },
    {
        name: 'strawberry',
        price: 2.5
    }
]

module.exports.toppings = [
    {
        topping: 'sprinkles',
        name: 'rainbow',
        price: 3.5
    },
    {
        topping: 'almonds',
        name: 'nutty',
        price: 3.0
    },
    {
        topping: 'flake',
        name: 'ninety-nine',
        price: 4.25
    }
]

module.exports.sauces = [
    {
        name: 'salted caramel',
        price: 7.0,
        img: 'caramel'
    },
    {
        name: 'maple bourbon',
        price: 7.5,
        img: 'maple'
    },
    {
        name: 'hot fudge',
        price: 8.0,
        img: 'fudge'
    }
]

import IceCream from '../classes/IceCream'
import StoreHelpers from '../utils/StoreHelpers'

const state = {
    ingredients: {
        containers: [],
        flavours: [],
        toppings: [],
        sauces: []
    },
    order: [],
    currentlyselected: {
        container: null,
        flavour: null,
        toppings: [],
        sauce: null,
        containerSize: null,
        containerType: null
    },
    currentIceCream: null
}

const getters = {}

const actions = {
    resetCurrentSelections({ commit }) {
        commit('SET_CURRENT_SELECTION', null)
        commit('SET_CURRENT_ICECREAM', null)
    },

    addIceCreamToOrder({ commit, dispatch }) {
        this.order.addIceCream(this.currentIceCream)
        dispatch('resetCurrentSelections')
    },

    makeIngredients({ commit }, { containers, flavours, toppings, sauces }) {
        commit('SAVE_INGREDIENT', {
            ingredientName: 'containers',
            value: StoreHelpers.makeContainers(containers)
        })
        commit('SAVE_INGREDIENT', {
            ingredientName: 'flavours',
            value: StoreHelpers.makeFlavours(flavours)
        })
        commit('SAVE_INGREDIENT', {
            ingredientName: 'toppings',
            value: StoreHelpers.makeToppings(toppings)
        })
        commit('SAVE_INGREDIENT', {
            ingredientName: 'sauces',
            value: StoreHelpers.makeSauces(sauces)
        })
    },
    makeIceCreamIfValid({ commit, state, dispatch }) {
        const c = state.currentlyselected
        if (!c.container || !c.flavour) {
            commit('SET_CURRENT_ICECREAM', null)
        } else {
            dispatch('_makeNewIceCream')
        }
    },
    _makeNewIceCream({ state, commit }) {
        const c = state.currentlyselected
        commit(
            'SET_CURRENT_ICECREAM',
            new IceCream(c.container, c.flavour, c.toppings, c.sauce)
        )
    },
    setSelectedContainerSize({ commit, dispatch }, size) {
        commit('SET_SELECTED_INGREDIENT', {
            ingredientName: 'containerSize',
            value: size
        })
        dispatch('_setSelectedContainer')
    },
    setSelectedContainerType({ commit, dispatch }, type) {
        commit('SET_SELECTED_INGREDIENT', {
            ingredientName: 'containerType',
            value: type
        })
        dispatch('_setSelectedContainer')
    },
    _setSelectedContainer({ state, commit, dispatch }) {
        const size = state.currentlyselected.containerSize
        const type = state.currentlyselected.containerType
        if (!(size && type)) {
            commit('SET_SELECTED_INGREDIENT', {
                ingredientName: 'container',
                value: null
            })
        } else {
            commit('SET_SELECTED_INGREDIENT', {
                ingredientName: 'container',
                value: StoreHelpers.findContainer(
                    state.ingredients.containers,
                    size,
                    type
                )
            })
        }
        dispatch('makeIceCreamIfValid')
    },

    setSelectedFlavour({ state, commit, dispatch }, flavourName) {
        commit('SET_SELECTED_INGREDIENT', {
            ingredientName: 'flavour',
            value:
                state.ingredients.flavours.find(f => f.name === flavourName) ||
                null
        })
        dispatch('makeIceCreamIfValid')
    },
    setSelectedTopping({ commit, dispatch }, toppingName) {
        commit('TOGGLE_SELECTED_TOPPINGS', toppingName)
        dispatch('makeIceCreamIfValid')
    },
    setSelectedSauce({ state, commit, dispatch }, sauceName) {
        commit('SET_SELECTED_INGREDIENT', {
            ingredientName: 'sauce',
            value:
                state.ingredients.sauces.find(s => s.name === sauceName) || null
        })
        dispatch('makeIceCreamIfValid')
    }
}

const mutations = {
    SET_SELECTED_INGREDIENT(state, { ingredientName, value }) {
        state.currentlyselected[ingredientName] = value
    },

    SAVE_INGREDIENT(state, { ingredientName, value }) {
        state.ingredients[ingredientName] = value
    },

    TOGGLE_SELECTED_TOPPINGS(state, toppingName) {
        const toppings = state.currentlyselected.toppings
        const toppingIndex = toppings.findIndex(t => t.name === toppingName)
        if (toppingIndex !== -1) {
            toppings.splice(toppingIndex, 1)
        } else if (toppings.length === 2) {
            toppings.shift()
            toppings.push(
                state.ingredients.toppings.find(t => t.name === toppingName)
            )
        } else {
            toppings.push(
                state.ingredients.toppings.find(t => t.name === toppingName)
            )
        }
    },

    SET_CURRENT_ICECREAM(state, currentIceCream) {
        state.currentIceCream = currentIceCream
    },

    SET_CURRENT_SELECTION(state, currentlyselected) {
        state.currentlyselected = currentlyselected
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}

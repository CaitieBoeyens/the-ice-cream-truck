const state = {
    currentOrder: [],
    employeeOrder: false
}
const getters = {
    orderTotal: state =>
        state.currentOrder
            .map(i => i.getPrice())
            .reduce((total, curr) => total + curr, 0)
}

const actions = {
    removeIcecreamFromOrder({ commit }, iceCream) {
        commit('REMOVE_ICE_CREAM')
    }
}

const mutations = {
    ADD_ICE_CREAM(state, iceCream) {
        state.currentOrder.push(iceCream)
    },
    REMOVE_ICE_CREAM(state, iceCream) {
        const iceCreamIndex = state.currentOrder.findIndex(
            i => i.getName() === iceCream.getName()
        )
        if (iceCreamIndex !== -1) {
            state.currentOrder.splice(iceCreamIndex, 1)
        }
    },
    TOGGLE_EMPLOYEE_ORDER(state, status) {
        if (status === true || status === false) {
            state.employeeOrder = status
        } else {
            state.employeeOrder = !state.employeeOrder
        }
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

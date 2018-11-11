import Order from '../classes/Order';
import EmployeeOrder from '../classes/EmployeeOrder';
const state = {
    currentOrder: null,
    employeeOrder: false
};
const getters = {
    orderTotal: state => state.currentOrder.getPrice()
};

const mutations = {
    REMOVE_ICE_CREAM(state, index) {
        state.currentOrder.removeIceCream(index);
    },

    ADD_ICE_CREAM(state, iceCream) {
        state.currentOrder.addIceCream(iceCream);
    },
    SET_UP_ORDER(state) {
        state.currentOrder = new Order();
    },
    TOGGLE_EMPLOYEE_ORDER(state) {
        if (!(state.currentOrder instanceof EmployeeOrder)) {
            const employeeOrder = new EmployeeOrder();
            employeeOrder.addIceCreams(state.currentOrder.iceCreams);
            state.currentOrder = employeeOrder;
        } else {
            const order = new Order();
            order.addIceCreams(state.currentOrder.iceCreams);
            state.currentOrder = order;
        }
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    getters
};

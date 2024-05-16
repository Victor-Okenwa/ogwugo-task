// Our Easy peasy store for global, constants and reusable functions
import { action, createStore } from 'easy-peasy'

export default createStore({
    navShow: false,
    setNavShow: action((state, payload) => {
        state.navShow = payload;
    }),
});
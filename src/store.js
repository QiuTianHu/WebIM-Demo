import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        user: {
            username: "",
        },
        friends: [
            {
              name: "小磊",
              id: 1,
            },
            {
              name: "小虎",
              id: 2,
            },
            {
              name: "小恒",
              id: 3,
            }
        ]
    }
});

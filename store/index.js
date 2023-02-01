import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from "./modules/cart.js";
import address from "./modules/address.js";

export default new Vuex.Store({
	modules:{
		cart,
		address
	}
});
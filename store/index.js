import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from "./modules/cart.js";
import address from "./modules/address.js";
import user from "./modules/user.js";
import order from "./modules/order.js";
import category from "./modules/category.js";
import collection from "./modules/collection.js";
import subjects from "./modules/subjects.js";

export default new Vuex.Store({
	modules:{
		cart,
		address,
		user,
		order,
		category,
		collection,
		subjects
	}
});
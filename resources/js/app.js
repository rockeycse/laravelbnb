require('./bootstrap');

import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
import Index from "./Index";
import Vue from "vue";
import Vuex from "vuex";
import StarRating from './shared/components/StarRating';
import FatalError from './shared/components/FatalError';
import Success from './shared/components/Success';
import ValidationErrors from './shared/components/ValidationErrors';

window.Vue = require("vue");

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);
Vue.component("fatal-error", FatalError);
Vue.component("success", Success);
Vue.component("v-errors", ValidationErrors);

const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment (state) {
        state.count++
      }
    }
  });

const app = new Vue({
    el: "#app",
    router,
    store,
    components: {

        "index": Index,
    },
});

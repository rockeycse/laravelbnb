require('./bootstrap');

import moment from "moment";
import router from "./routes";
import VueRouter from "vue-router";
// import Vue from "vue";
import Index from "./Index";
import Vue from "vue";
import StarRating from './shared/components/StarRating';

window.Vue = require("vue");

Vue.use(VueRouter);

Vue.filter("fromNow", value => moment(value).fromNow());

Vue.component("star-rating", StarRating);

const app = new Vue({
    el: "#app",
    router,
    components: {

        "index": Index,
    },
});

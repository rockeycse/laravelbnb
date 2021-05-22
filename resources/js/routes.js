import VueRouter from "vue-router";
import Bookables from "./bookables/Bookables";
// import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";


const routes = [

    {
        path: '/',

        component: Bookables,
        name: 'home',
    },
    
    {
        path: '/second',

        component: Example2,
        name: 'second',
    },

];

const router = new VueRouter({
    routes, // raccourci pour `routes: routes`
    mode: "history",
});

export default router;
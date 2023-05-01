import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { createRouter, createWebHistory } from 'vue-router';
import AllProducts from './components/pages/allProducts.vue';
import AddProduct from './components/pages/addProduct.vue';
import NotFound from './components/pages/notFound.vue';
import ProductDetail from './components/pages/productDetail.vue';

const routes = [{
        path: '/',
        component: AllProducts,
        alias: '/products'
    },
    {
        path: '/products/:id',
        component: ProductDetail,
    },
    {
        path: '/add',
        component: AddProduct,
    },

    {
        path: '/:notFound(.*)*',
        component: NotFound,
        meta: {
            hideNavbar: true
        }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
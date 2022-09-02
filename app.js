import Home from './pages/Home/index.js';
import PastIssues from './pages/PastIssues/index.js';
import Music from './pages/Music/index.js';
import About from './pages/About/index.js';
import Subscribe from './pages/Subscribe/index.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import BackgroundAnimation from './components/BackgroundAnimation.js';

const routes = [
    { path: '/', component: Home },
    { path: '/:date', name: 'home', component: Home },
    { path: '/past-issues', component: PastIssues },
    { path: '/music', component: Music },
    { path: '/about', component: About },
    { path: '/subscribe', component: Subscribe }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

const app = Vue.createApp({});

app.component('Navbar', Navbar);
app.component('Footer', Footer);
app.component('BackgroundAnimation', BackgroundAnimation);
app.use(router);
app.mount('#app');

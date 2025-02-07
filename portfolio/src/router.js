import Blog from './views/blog.vue';
import HomePage from './views/Home.vue';
import About from './views/about-me.vue';
import Contact from './views/contact.vue';

export const routes = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/blog',
        component:Blog,
    },
    {
        path: '/blog/:id',
        component: () => import("@/views/blogs.vue"),
    },
    {
        path: '/about',
        component: About,
    },
    {
        path: '/contact',
        component:Contact,
    }
];
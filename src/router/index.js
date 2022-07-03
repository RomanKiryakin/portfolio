import { createRouter, createWebHashHistory } from 'vue-router';
import home from '@/pages/home.vue';
import portfolio from '@/pages/portfolio.vue';
import contacts from '@/pages/contacts.vue';
import about from '@/pages/about.vue';

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'home-page', component: home, path: '/home', alias: '/',
    },
    { name: 'about-me', component: about, path: '/about' },
    { name: 'my-portfolio', component: portfolio, path: '/portfolio' },
    { name: 'my-contacts', component: contacts, path: '/contacts' },
  ],
});

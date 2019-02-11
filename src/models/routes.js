import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About'
import Contact from '../pages/Contact.vue'

export const routes = [
    { name: 'home', path: '/', component: Home, display: 'Home'},
    { name: 'about', path: '/about', component: About, display: 'About'},
    { name: 'projects', path: '/projects', component: Projects, display: 'Projects' },
    { name: 'crojects', path: '/contact', component: Contact, display: 'Contact' }
];
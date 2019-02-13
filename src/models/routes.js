import Home from '../pages/Home.vue'
import Projects from '../pages/Projects.vue'
import About from '../pages/About'
import Contact from '../pages/Contact.vue'
import Error from '../pages/Error.vue'

export const routes = [
    { name: 'home', path: '/', component: Home, display: 'Home'},
    { name: 'about', path: '/about', component: About, display: 'About'},
    { name: 'projects', path: '/projects', component: Projects, display: 'Projects' },
    { name: 'crojects', path: '/contact', component: Contact, display: 'Contact' },
    { name: '*', path: '*', component: Error, display: '404 Error' }
];
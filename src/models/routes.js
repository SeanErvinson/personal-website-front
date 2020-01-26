import Home from '@/pages/Home'
import Projects from '@/pages/Projects'
import ProjectDetail from '@/components/Project/ProjectDetail'
import ProjectPrivacyPolicy from '@/components/Project/ProjectPrivacyPolicy'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import Error from '@/pages/Error'

export const routes = [
    { name: 'home', path: '/', component: Home, display: 'Home' },
    { name: 'about', path: '/about', component: About, display: 'About' },
    { name: 'projects', path: '/projects', component: Projects, display: 'Projects' },
    { name: 'projectDetail', path: '/projects/:slug', component: ProjectDetail },
    { name: 'projectPrivacyPolicy', path: '/projects/:slug/privacy-policy', component: ProjectPrivacyPolicy },
    { name: 'contact', path: '/contact', component: Contact, display: 'Contact' },
    { name: 'error', path: '*', component: Error, display: 'Error', hidden: true },
];
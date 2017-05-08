import Home from './Home/Home'
import About from './About/About'
import Resume from './Resume/Resume'

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    link: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    component: About,
    link: {
      title: 'About'
    }
  },
  {
    path: '/resume',
    component: Resume,
    link: {
      title: 'Resume'
    }
  },
]

export default routes

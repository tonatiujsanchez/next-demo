
import ActiveLink from './ActiveLink'
import style from './Navbar.module.css'

interface MenuItem {
  text: string;
  href: string;
}

const menuItems: MenuItem[] = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];


const Navbar = () => {
  return (
    <nav className={style.navbar}>
        { menuItems.map( ({ text, href } )=> (
          <ActiveLink key={ href } text={ text } href={ href } />
        ))}
    </nav>
  )
}

export default Navbar
import { RiMenu2Fill, RiCloseFill } from 'react-icons/ri';
import List from "../List/List";
import { useState } from 'react';

const Navbar = () => {
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products', name: 'Products' }
      ];
      const [open, setOpen] = useState(false)
      
    return (
        <nav>
            <div className='text-2xl md:hidden' onClick={()=>setOpen(!open)}>
                {
                    open === true ? <RiCloseFill></RiCloseFill> : <RiMenu2Fill></RiMenu2Fill>
                }
            </div>

            <ul className={`md:flex duration-1000 justify-center absolute md:static bg-purple-400 px-6 py-3 ml-3
            ${open ? 'top-7' : '-top-60'}`}>
                {
                    routes.map(route => <List key={route.id} route={route}></List>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;
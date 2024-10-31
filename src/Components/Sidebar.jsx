//Import React from 'react';

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LuBox, LuUser,  LuShoppingBag, LuShoppingCart, LuLogOut, LuTruck } from 'react-icons/lu';
// import { LiaBuysellads, LuMessageSquare} from 'react-icons/lia';

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  const SIDEBAR_LINKS = [
    { id: 1, path: "/", name: "Dashboard", icon: <LuBox /> },
    { id: 2, path: "/products", name: "Products", icon: <LuShoppingBag /> },
    // { id: 3, path: "/messages", name: "Messages", icon: <LuMessageSquare /> },
    { id: 3, path: "/shopping-cart", name: "Shopping Cart", icon: <LuShoppingCart /> },
    { id: 4, path: "/track-order", name: "Track Order", icon: <LuTruck /> },
    { id: 5, path: "/profile", name: "Profile", icon: <LuUser /> },
    // { id: 7, path: "/transactions", name: "Transactions", icon: <LiaBuysellads /> },
    { id: 6, path: "/logout", name: "LogOut", icon: <LuLogOut /> },
  ];

  return (
    <div className="text-black w-16 md:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-4 bg-white">
      {/* h-screen utility class sets the height of an element to the height of the viewport. This is equivalent to setting the height property to 100vh in regular CSS. px-4 utility class sets the horizontal padding of an element to 1rem (16 pixels). This means it applies a padding of 1rem to both the left and right sides of the element */}
      {/* LOGO */}

      <div className="mb-8">
        
      <img src="/new-1.jpg" alt="" className="w-20 hidden md:flex rounded-full px-4" />
      <img src="/new-2.jpg" alt="" className="w-20 flex md:hidden rounded-full" />

      </div>



       {/* NAVIGATION LINKS */}
     {/* px-4 utility class sets the horizontal padding of an element to 1rem (16 pixels). This means it applies a padding of 1rem to both the left and right sides of the element. rounded-md utility class applies a medium border radius of 0.375rem (6 pixels) to an element12. This class is useful for giving elements slightly rounded corners, creating a softer and more modern look. */}
      <ul className="mt-6 space-y-6">
        {SIDEBAR_LINKS.map((link) => (
          <li key={link.id} className={`font-medium rounded-md px-5 py-2 hover:bg-gray-100 hover:text-black ${location.pathname === link.path ? 'bg-blue-500 text-white transition delay-2 smooth' : ''}`}>
            <Link to={link.path} className="flex items-center md:space-x-5" onClick={() => setActiveLink(link.path)}>
              <span>{link.icon}</span>
              <span className="text-sm hidden md:flex">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    <Link to="help">
        <div className="text-black w-full absolute bottom-5 left-0 px-4 py-2 cursor-pointer text-center">
        <p className="flex items-center space-x-2 text-xs text-white py-2 px-5 bg-gradient-to-r from-slate-900 to-slate-600 rounded-full">
          <span className="font-semibold">?</span> <span className="hidden md:flex">Need Help</span>
          
        </p>
      </div>
      </Link>
    </div>
  );
};

export default Sidebar;


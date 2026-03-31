import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavBar = () => {

    const [menus, setMenus] = useState([]);

    const [actions, setActions] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() =>{

        fetch('/data/navLinkData.json')
            .then(response => response.json())
            .then(data => {
                setMenus(data.navbar);
                setActions(data.actions);
                setLoading(false);
            }); 

    }, [])

    return (
       
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">


       {  loading ? <p>Loading...</p> : menus.map(menu => <li key={menu.id}><a>{menu.name}</a></li>) }


      </ul>
    </div>
    <a className="btn btn-ghost text-xl text-blue-500 ">DigiTools</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {  loading ? <p>Loading...</p> : menus.map(menu => <li key={menu.id}><a>{menu.name}</a></li>) } 
    </ul>
  </div>
  <div className="navbar-end gap-4">
  {/* logo, Login , Get Started button here */}

   {loading ? (
    <p>Loading...</p>
  ) : (
    actions.map((item) => {

      // Cart Icon
    if (item.type === "icon") {
  return (
    <div key={item.id} className="relative">
      
      {/* Cart Icon */}
      <button className="btn btn-ghost text-xl">
        <AiOutlineShoppingCart />
      </button>

      {/* Counter Badge */}
      <span className="absolute -top-0.5 -right-0.5 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
        3
      </span>

    </div>
  );
}

      // Login
      if (item.type === "link") {
        return (
          <a key={item.id} href={item.link} className="btn btn-ghost">
            {item.name}
          </a>
        );
      }

      //Get Started Button
      if (item.type === "button") {
        return (
          <a
            key={item.id}
            href={item.link}
            className="btn btn-primary text-white"
          >
            {item.name}
          </a>
        );
      }

    })
  )}
  </div>
</div>
      
    );
};

export default NavBar;
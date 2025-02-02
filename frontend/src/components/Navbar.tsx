import { useEffect } from 'react';
import { themeChange } from 'theme-change';

const Navbar = ({ className = "" }) => {
  const themes = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", 
    "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", 
    "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", 
    "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", 
    "dim", "nord", "sunset"];

  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className={`navbar ${className}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>Home</a></li>
            <li><a>Projects</a></li>
            <li><a>About</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-2xl font-bold">Reckon</a>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a className="font-medium">Home</a></li>
          <li><a className="font-medium">Projects</a></li>
          <li><a className="font-medium">About</a></li>
        </ul>
      </div>
      
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-sm m-1">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
            </svg>
            <span className="hidden md:inline">Theme</span>
          </div>
          <div tabIndex={0} className="dropdown-content bg-base-100/90 backdrop-blur-lg text-base-content rounded-box top-px max-h-96 w-56 overflow-y-auto shadow-2xl">
            <div className="grid grid-cols-1 gap-3 p-3">
              {themes.map((theme) => (
                <button
                  key={theme}
                  className="outline-base-content text-start hover:bg-base-300 padding-2 rounded-lg"
                  data-set-theme={theme}
                  data-act-class="active"
                >
                  <div data-theme={theme} className="bg-base-100 rounded-lg font-sans">
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                        <div className="flex-grow text-sm font-bold">{theme}</div>
                        <div className="flex flex-shrink-0 flex-wrap gap-1">
                          <div className="bg-primary w-2 rounded"></div>
                          <div className="bg-secondary w-2 rounded"></div>
                          <div className="bg-accent w-2 rounded"></div>
                          <div className="bg-neutral w-2 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
        <a className="btn btn-primary btn-sm ml-2">Connect Wallet</a>
      </div>
    </div>
  );
};

export default Navbar;
// 3rd-party packages
import { FC, useState, useEffect } from 'react';
import { FaCrown } from 'react-icons/fa';
import { ImMenu3, ImMenu4 } from 'react-icons/im';

type navItemType = {
  id: number;
  name: string;
  link: string;
};

const navItems: navItemType[] = [
  {
    id: 0,
    name: 'home',
    link: '#hero',
  },
  {
    id: 1,
    name: 'about',
    link: '#about',
  },
  {
    id: 2,
    name: 'projects',
    link: '#projects',
  },
  {
    id: 3,
    name: 'skills',
    link: '#skills',
  },
  {
    id: 4,
    name: 'experience',
    link: '#experience',
  },
  {
    id: 5,
    name: 'contact',
    link: '#contact',
  },
];

const Navbar: FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <nav className="w-full h-fit flex justify-between items-center">
        <div className="font-display flex flex-1 text-4xl ">
          <FaCrown className="text-green-400 pr-2" />
          <span>Prince</span>
        </div>
        <div className="flex-1">
          <ul className="h-full hidden lg:flex justify-around items-center font-regular">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.link}
                  className="capitalize nav-item-hover-line-effect"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className=" text-3xl flex-1 flex justify-end md:justify-center items-center lg:hidden">
          {dropdownOpen ? (
            <ImMenu4 onClick={() => setDropdownOpen(false)} />
          ) : (
            <ImMenu3 onClick={() => setDropdownOpen(true)} />
          )}
        </div>
      </nav>
      {dropdownOpen && (
        <div>
          <ul className="py-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                className="my-5"
              >
                <a
                  href={item.link}
                  className="capitalize nav-item-hover-line-effect font-semibold"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;

import React, { useState, Fragment } from 'react'
import logo from "./../img/logo.jpg"
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const Navbar = () => {
  const [navigation, setNavigation] = useState([
    { name: 'Top Songs', to: '/', current: true },
    { name: 'Explore', to: '/explore', current: false },
    { name: 'My Favorites', to: "/favorites", current: false },
  ]);

  var pathname = (uri) => {
    switch (window.location.pathname) {
      case "/":
        setNavigation([
          { name: 'Top Songs', to: '/', current: true },
          { name: 'Explore', to: '/explore', current: false },
          { name: 'My Favorites', to: "/favorites", current: false },
        ]);
        break;

      case "/explore":
        setNavigation([
          { name: 'Top Songs', to: '/', current: false },
          { name: 'Explore', to: '/explore', current: true },
          { name: 'My Favorites', to: "/favorites", current: false },
        ]);
        break;

      case "/favorites":
        setNavigation([
          { name: 'Top Songs', to: '/', current: false },
          { name: 'Explore', to: '/explore', current: false },
          { name: 'My Favorites', to: "/favorites", current: true },
        ]);
        break;
      default:
        setNavigation([
          { name: 'Top Songs', to: '/', current: false },
          { name: 'Explore', to: '/explore', current: false },
          { name: 'My Favorites', to: "/favorites", current: false },
        ]);
    }
  };

  


    return (
<Disclosure as="nav" className="bg-purple-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-purple-400 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto rounded-full mx-auto"
                    src= {logo}
                    alt="Music Player App"
                  />
                </div>
                <div className="hidden sm:ml-2 sm:block">
    
                  <div className="flex space-x-4">
                  <p className='rounded-md mr-4 px-2 py-1 font-medium text-white text-2xl'>Music Player App</p>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        className={classNames(
                          item.current ? 'bg-purple-900 text-white' : 'text-purple-300 hover:bg-purple-700 hover:text-white',
                          'rounded-md px-3 py-2 font-medium text-lg'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                        onClick={pathname(item.to)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                  <p className='rounded-md px-3 py-2 font-medium text-white text-xl'>My Profile</p>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    )
  }
export default Navbar
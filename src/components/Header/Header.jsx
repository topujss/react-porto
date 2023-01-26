import Logo from '../../img/logo.png';

import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { TfiSearch } from 'react-icons/tfi';

export default function Header() {
  return (
    <>
      <section className="w-60">
        <header className="py-5">
          <aside
            id="separator-sidebar"
            class="w-60 fixed left-0 top-0 h-screen transition-transform -translate-x-full sm:translate-x-0 z-40"
          >
            <div class="px-3 py-4 overflow-y-auto h-full border-r border-r-slate-300">
              <ul class="space-y-2">
                <li>
                  <Link to="/" class="flex items-center p-2 text-gray-900 rounded-lg">
                    <img
                      className="w-28"
                      src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
                      alt="logo of instagram"
                    />
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TfiSearch className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Search</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Explore</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TfiSearch className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Reels</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Messages</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <TfiSearch className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Notifications</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <AiFillHome className="text-2xl" />
                    <span class="ml-4 font-medium text-lg">Create</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    class="flex items-center p-2 font-normal text-gray-900 rounded-3xl hover:bg-gray-100"
                  >
                    <img
                      className="w-20"
                      src="https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png"
                      alt=""
                    />
                    <span class="ml-4 font-medium text-lg">Profile</span>
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </header>
      </section>
    </>
  );
}
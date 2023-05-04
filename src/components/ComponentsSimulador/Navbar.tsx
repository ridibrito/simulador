import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BiDotsVertical, BiDotsHorizontalRounded } from "react-icons/bi";
import { AiFillCloseCircle, AiFillFunnelPlot } from "react-icons/ai";
import { MdOutlineAttachMoney } from "react-icons/md";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2 } from "react-icons/hi";
import { BsFillCalendarCheckFill } from "react-icons/bs";

export default function Navbar() {
  const [menu, setMenu] = useState(true);
  const [menuUser, setMenuUser] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const [menuDropA, setMenuDropA] = useState(false);
  const [menuDropF, setMenuDropF] = useState(false);

  function closeMenuF() {
    setMenuDropF(true);
  }
  function openMenuF() {
    setMenuDropF(false);
  }
  function closeMenuA() {
    setMenuDropA(true);
  }
  function openMenuA() {
    setMenuDropA(false);
  }

  function toggleOpenMenu() {
    setMenu(false);
  }
  function toggleCloseMenu() {
    setMenu(true);
  }
  function toggleCloseSubMenu() {
    setSubMenu(true);
  }
  function toggleOpenSubmenu() {
    setSubMenu(false);
  }

  function toggleOpenMenuUser() {
    setMenuUser(true);
  }
  function toggleCloseMenuUser() {
    setMenuUser(false);
  }

  return (
    <>
      <div className="">
        <nav className="bg-white w-screen border-b border-gray-200 dark:border-gray-900 px-4 lg:px-6 py-3.5 dark:bg-gray-800">
          <div className="flex justify-between items-center">
            <div className="flex justify-start items-center">
              <Link href="/" className="flex mr-4">
                <Image
                  src="/logosite.png"
                  className="mr-3 h-8"
                  alt="coruss Logo"
                  width={150}
                  height={30}
                />
              </Link>
            </div>
            <div className="">
              <div className="flex lg:hidden">
                {menu ? (
                  <HiOutlineMenuAlt2
                    onClick={toggleOpenMenu}
                    className="text-sky-600 w-6 h-6"
                  />
                ) : (
                  <HiOutlineMenuAlt3
                    onClick={toggleCloseMenu}
                    className="text-sky-600 w-6 h-6"
                  />
                )}
                {subMenu ? (
                  <BiDotsHorizontalRounded
                    onClick={toggleOpenSubmenu}
                    className="text-sky-600 w-6 h-6 transition-all ease-in duration-300"
                  />
                ) : (
                  <BiDotsVertical
                    onClick={toggleCloseSubMenu}
                    className="text-sky-600 w-6 h-6 transition-all ease-in duration-300"
                  />
                )}
              </div>
              <div className="items-center hidden lg:flex">
                <div className="hidden md:flex items-center lg:order-2">
                  <button
                    type="button"
                    data-dropdown-toggle="notification-dropdown"
                    className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                  >
                    <span className="sr-only">Ver notificações</span>
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                    </svg>
                  </button>

                  <button
                    onClick={toggleOpenMenuUser}
                    className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                  >
                    <span className="sr-only">Abrir menu usuário</span>
                    <Image
                      className="w-8 h-8 rounded-full"
                      src="/foto capa.png"
                      alt="user photo"
                      width={30}
                      height={30}
                    />
                  </button>
                  <div
                    style={{ display: menuUser ? "block" : "none" }}
                    className="z-50 fixed top-10 right-5 my-4 w-56 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <div className="bg-sky-600 py-5 px-4 rounded">
                      <span className="flex items-center justify-between text-sm font-semibold text-white dark:text-gray-900">
                        Ricardo Albuquerque{" "}
                        <AiFillCloseCircle onClick={toggleCloseMenuUser} />
                      </span>
                      <span className="block text-sm font-light text-gray-300 truncate dark:text-gray-400">
                        ricardo.brasiliadf@hotmail.com
                      </span>
                    </div>
                    <ul className="py-1 font-light text-gray-500 dark:text-gray-400">
                      <li>
                        <Link
                          href="/meuPerfil"
                          className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                        >
                          Meu perfil
                        </Link>
                      </li>
                    </ul>

                    <ul
                      className="py-1 font-light text-gray-500 dark:text-gray-400"
                      aria-labelledby="dropdown"
                    >
                      <li>
                        <Link
                          href="/logout"
                          className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sair
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="lg:hidden">
          <aside
            style={{ display: menu ? "none" : "flex" }}
            className="fixed transition-all ease-in left-0 w-64 h-full"
            aria-label="Sidenav"
          >
            <div className="overflow-y-auto py-1 px-3 h-full bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
              <div className="flex items-center text-center"></div>
              <ul className="space-y-2 mt-8">
                <li>
                  <Link
                    href="/dashboard"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span
                      style={{ display: menu ? "none" : "flex" }}
                      className="ml-3"
                    >
                      Dashboard
                    </span>
                  </Link>
                </li>
                <Link
                  href="/crm"
                  type="button"
                  className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  aria-controls="dropdown-sales"
                  data-collapse-toggle="dropdown-sales"
                >
                  <AiFillFunnelPlot className="text-gray-400 w-7 h-6 group-hover:text-black" />
                  <span
                    style={{ display: menu ? "none" : "flex" }}
                    className="flex-1 ml-3 text-left whitespace-nowrap"
                  >
                    CRM
                  </span>
                </Link>
                <div className="flex items-center group hover:bg-gray-100 rounded-lg">
                  <p
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-300 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-pages"
                    data-collapse-toggle="dropdown-pages"
                  >
                    <button
                      onClick={menuDropA ? openMenuA : closeMenuA}
                      type="button"
                      className="flex items-center  w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                      aria-controls="dropdown-pages"
                      data-collapse-toggle="dropdown-pages"
                    >
                      <svg
                        aria-hidden="true"
                        className="flex-shrink-0 w-6 h-6  text-gray-400 transition duration-300 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                          cbuttonp-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="flex-1 ml-3 text-left flex items-center justify-between whitespace-nowrap">
                        ADM{" "}
                        {menuDropA ? (
                          <BiChevronDown onClick={openMenuA} />
                        ) : (
                          <BiChevronRight onClick={closeMenuA} />
                        )}
                      </span>
                    </button>
                  </p>
                </div>
                <ul
                  style={{ display: menuDropA ? "block" : "none" }}
                  id="dropdown-pages"
                  className="hidden py-2 space-y-2"
                >
                  <li>
                    <Link
                      href="/adm/vendas"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Vendas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/adm/clientes"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/adm/corretoras"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Corretoras
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/adm/relatorios"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Relatórios
                    </Link>
                  </li>
                </ul>
                <div className="flex items-center group hover:bg-gray-100 rounded-lg">
                  <button
                    onClick={menuDropF ? openMenuF : closeMenuF}
                    type="button"
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-pages"
                    data-collapse-toggle="dropdown-pages"
                  >
                    <MdOutlineAttachMoney className="text-gray-400 w-6 h-6 group-hover:text-black dark:hover:bg-gray-700 dark:group-hover:text-white" />
                    <span className="flex-1 ml-3 text-left flex items-center justify-between whitespace-nowrap">
                      Financeiro{" "}
                      {menuDropF ? <BiChevronDown /> : <BiChevronRight />}
                    </span>
                  </button>
                </div>
                <ul
                  style={{ display: menuDropF ? "block" : "none" }}
                  id="dropdown-pages"
                  className="hidden py-2 space-y-2"
                >
                  <li>
                    <Link
                      href="/financeiro/movimentacao"
                      className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                      Movimentação
                    </Link>
                  </li>
                  <Link
                    href="/financeiro/bonificacoes"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Bonificação
                  </Link>

                  <Link
                    href="/financeiro/relatoriosf"
                    className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                  >
                    Relatórios Financeiros
                  </Link>
                </ul>
                <li>
                  <Link
                    href="/simulador"
                    type="button"
                    className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    aria-controls="dropdown-authentication"
                    data-collapse-toggle="dropdown-authentication"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      style={{ display: menu ? "none" : "flex" }}
                      className="flex-1 ml-3 text-left whitespace-nowrap"
                    >
                      Simulador
                    </span>
                  </Link>
                </li>
              </ul>
              <ul className="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
                <li>
                  <Link
                    href="/vigencia"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path
                        fill-rule="evenodd"
                        d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      style={{ display: menu ? "none" : "flex" }}
                      className="ml-3"
                    >
                      Fechamentos e vigências
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/calendario"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <BsFillCalendarCheckFill className="text-gray-400 w-5 h-5 group-hover:text-black dark:group-hover:text-white" />

                    <span
                      style={{ display: menu ? "none" : "flex" }}
                      className="ml-3"
                    >
                      Calendário
                    </span>
                  </Link>
                </li>

                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
                  >
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span
                      style={{ display: menu ? "none" : "flex" }}
                      className="ml-3"
                    >
                      Ajuda
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <div
          style={{ display: subMenu ? "flex" : "none" }}
          className="flex lg:hidden bg-white shadow-lg transition-all ease-in h-12 fixed z-20 w-full dark:bg-gray-800"
        >
          <div className="flex w-full items-center pt-1 pr-2 ">
            <div className="w-4/5"></div>
            <div className="flex min-w-fit items-center">
              <div>
                <button
                  type="button"
                  data-dropdown-toggle="notification-dropdown"
                  className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                >
                  <span className="sr-only">Ver notificações</span>
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                  </svg>
                </button>
              </div>

              <div>
                <button
                  onClick={toggleOpenMenuUser}
                  type="button"
                  className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 relative"
                >
                  <span className="sr-only">Abrir menu usuário</span>
                  <Image
                    className="w-8 h-8 rounded-full"
                    src="/foto capa.png"
                    alt="user photo"
                    width={30}
                    height={30}
                  />
                </button>

                <div
                  style={{ display: menuUser ? "block" : "none" }}
                  className="hidden fixed top-25 right-0 z-50 my-2  w-full text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="py-5 px-4 bg-sky-600">
                    <span className="flex justify-between text-sm font-semibold text-white dark:text-gray-900">
                      Ricardo Albuquerque{" "}
                      <AiFillCloseCircle onClick={toggleCloseMenuUser} />
                    </span>
                    <span className="block text-sm font-light text-gray-300 truncate dark:text-gray-400">
                      ricardo.brasiliadf@hotmail.com
                    </span>
                  </div>
                  <ul
                    className="py-1 font-light text-gray-500 dark:text-gray-400"
                    aria-labelledby="dropdown"
                  >
                    <li>
                      <Link
                        href="#"
                        className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white"
                      >
                        Meu perfil
                      </Link>
                    </li>
                  </ul>

                  <ul
                    className="py-1 font-light text-gray-500 dark:text-gray-400"
                    aria-labelledby="dropdown"
                  >
                    <li>
                      <Link
                        href="/logout"
                        className="block py-2 px-4 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Sair
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

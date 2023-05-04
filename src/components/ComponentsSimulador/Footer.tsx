import Link from "next/link";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
export default function Footer() {
  return (
    <>
      <footer className="bg-white w-full bottom-0 left-0 shadow sm:flex h-12 sm:items-center sm:justify-between p-4 sm:p-6 xl:p-8 dark:bg-gray-800">
        <p className="mb-4 text-sm text-center text-gray-500 dark:text-gray-400 sm:mb-0">
          &copy; 2022-2023{" "}
          <Link
            href="https://coruss.com.br/"
            className="hover:underline"
            target="_blank"
          >
            Coruss.com.br
          </Link>
          . Todos os direitos reservados.
        </p>
        <div className="flex justify-center items-center space-x-1 bottom-0">
          <a
            target="_blank"
            href="https://www.facebook.com/corusscrm"
            data-tooltip-target="tooltip-facebook"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            rel="noreferrer"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="sr-only">Facebook</span>
          </a>
          <div
            id="tooltip-facebook"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
          >
            Siga no Facebook
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            target="_blank"
            href="https://www.instagram.com/coruss.crm/"
            data-tooltip-target="tooltip-twitter"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            rel="noreferrer"
          >
            <AiFillInstagram className="w-5 h-5" />
            <span className="sr-only">Instagram</span>
          </a>
          <div
            id="tooltip-twitter"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
          >
            Siga no Instagram
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCZluqwMxd8bLuRtvHdnO4Sg"
            data-tooltip-target="tooltip-github"
            className="inline-flex justify-center p-2 text-gray-500 rounded-lg cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
            rel="noreferrer"
          >
            <AiFillYoutube className="w-5 h-5" />
            <span className="sr-only">Youtube</span>
          </a>
          <div
            id="tooltip-github"
            role="tooltip"
            className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700"
          >
            Siga no Youtube
            <div className="tooltip-arrow" data-popper-arrow></div>
          </div>
        </div>
      </footer>
    </>
  );
}

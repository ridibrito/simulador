import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineLogout } from 'react-icons/ai'

export default function Navbar() {
  return (
    <>
      <div className="bg-white dark:bg-gray-800 p-5 shadow">
        <div className='flex items-center justify-between max-w-7xl mx-auto'>
        <div className="flex">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo coruss"
              width="180"
              height="40"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/foto capa.png"
            alt="avatar"
            width="55"
            height="50"
            className="rounded-full"
          />
          <div className='hidden sm:block'>
            <Link href="/user">
              <a>
                <p>Ricardo</p>
                <p>ricardo.brasiliadf@hotmail.com</p>
              </a>
            </Link>
          </div>
          <button className='hidden sm:flex bg-sky-600 text-white font-semibold rounded px-4 py-2 shadow'>sair</button>
          <button className='sm:hidden flex '>
            <AiOutlineLogout className='w-6 h-6 text-sky-600'/>
            </button>

        </div>
       </div>
      </div>
    </>
  )
}

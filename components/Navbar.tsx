import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <>
      <div className="flex items-center bg-white dark:bg-gray-800 justify-between p-5 shadow">
        <div className="flex">
          <Link href="/">
            <Image
              src="/corusslogo.png"
              alt="logo coruss"
              width="140"
              height="30"
              className="cursor-pointer"
            />
          </Link>
        </div>
        <ThemeToggle />
        <div className="flex gap-2">
          <Image
            src="/foto capa.png"
            alt="avatar"
            width="45"
            height="40"
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
        </div>
      </div>
    </>
  )
}

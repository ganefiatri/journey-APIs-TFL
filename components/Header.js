import Image from "next/image"
import { SearchIcon, GlobeAltIcon } from '@heroicons/react/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
            <Image 
            src='https://api-portal.tfl.gov.uk/content/9dd986ca-3605-ba92-f84a-0f8df104a2b0.svg'
            layout="fill"
            objectFit="contain"
            objectPosition="left"
            alt="TFL LOGO"
            />
        </div>
        {/* middle Search */}
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
            <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="Start your search"/>
            <SearchIcon  className="hidden md:inline-flex h-8 bg-blue-800 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
        </div>
        {/* right */}
        <div className="flex items-center space-x-4 justify-end text-gray-500">
            <p className="hidden md:inline cursor-pointer">Go to web TFL</p>
            <GlobeAltIcon className="h-6 cursor-pointer" />
        </div>
    </header>
  )
}

export default Header
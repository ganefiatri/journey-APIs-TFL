import Image from "next/image"
import { SearchIcon, GlobeAltIcon } from '@heroicons/react/solid'
import { useState } from "react"
import { useRouter } from "next/router";

function Header() {
  const [searchFrom, setSearchFrom] = useState("");
  const [searchTo, setSearchTo] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: '/search',
      query: {
        from: searchFrom,
        to: searchTo
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
        {/* left */}
        <div onClick={() => router.push("/")} className="relative flex items-center h-10 cursor-pointer my-auto">
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
            <input value={searchFrom} onChange={(e) => setSearchFrom(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="from"/>
            <input value={searchTo} onChange={(e) => setSearchTo(e.target.value)} className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="to"/>
            <SearchIcon onClick={search}  className="hidden md:inline-flex h-8 bg-blue-800 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
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
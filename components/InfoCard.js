import Image from "next/image"

function InfoCard({commonName, placeType}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
        <div className="relative h-16 w-16">
            <Image 
            src='https://api-portal.tfl.gov.uk/content/9dd986ca-3605-ba92-f84a-0f8df104a2b0.svg'
            layout="fill"
            objectFit="contain"
            alt="TFL LOGO"
            />
        </div>
        <div>
            <h2 className="uppercase font-semibold text-gray-700">{commonName}</h2>
            <h3 className="text-gray-500">{placeType}</h3>
        </div>
        
    </div>
  )
}

export default InfoCard
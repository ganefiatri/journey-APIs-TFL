import Image from "next/image"

function SmallCard({isTflService, isFarePaying, isScheduledService, modeName}) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-300 ease-out">
        {/* left */}
        <div className="relative h-16 w-16">
            <Image
                src="https://api-portal.tfl.gov.uk/content/9dd986ca-3605-ba92-f84a-0f8df104a2b0.svg"
                alt="logo"
                layout="fill"
                objectFit="contain"
                className="rounded-lg pl-2"
            />
        </div>
        {/* right */}
        <div>
            <h2 className="uppercase font-semibold text-gray-700">{modeName}</h2>
            <h3 className={isTflService == true ? 'text-green-600' : 'text-red-700'}>{isTflService == true ? "Service is available" : "Service is not available"}</h3>
            <h3 className="text-gray-500">{isFarePaying == true ? "Paying" : "No Pay"}</h3>
            <h3 className="text-gray-500">{isScheduledService == true ? "Schedule service available" : "No Schedule service available"}</h3>
        </div>
    </div>
  )
}

export default SmallCard
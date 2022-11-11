import Header from '../components/Header'
import { useRouter } from "next/router"
import InfoCard from '../components/InfoCard';

function search({ searchResults }) {
    // get data from api
    const data = searchResults.toLocationDisambiguation.disambiguationOptions;

    const router = useRouter();
    const { from, to } = router.query

    return (
        <div className='h-screen'>
            <Header />
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-sm'>this the journey planer from {from} to {to}</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-4'>{from} to {to}</h1>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {data?.map((item) => (
                            // send data to component page
                            <InfoCard commonName={item.place.commonName} placeType={item.place.placeType} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}


export async function getServerSideProps(context) {
    // fetching data from api
    const res = await fetch(`https://api.tfl.gov.uk/Journey/JourneyResults/${context.query.from}/to/${context.query.to}`)
    // .then(res => res.json());
    const searchResults = await res.json()

    return {
        props: {
            searchResults,
        }
    }
}

export default search

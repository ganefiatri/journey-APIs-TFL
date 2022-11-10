import Head from 'next/head'
import Header from '../components/Header'
import SmallCard from '../components/SmallCard'

export default function Home({ journeyData }) {
  return (
    <div className="">
      <Head>
        <title>Journey Transfort for London</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Main */}
      <main className='max-w-7xl mx-auto px-6 sm:px-16'>
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5 text-gray-700">Here the Journey Transfort for London</h2>

          {/* pull some data from API https://api.tfl.gov.uk/Journey */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {journeyData?.map(({ isTflService, isFarePaying, isScheduledService, modeName }) => (
              <SmallCard
                key={modeName}
                isTflService={isTflService}
                isFarePaying={isFarePaying}
                isScheduledService={isScheduledService}
                modeName={modeName}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const journeyData = await fetch('https://api.tfl.gov.uk/Journey/Meta/Modes')
    .then(
      (res) => res.json()
    );
  return {
    props: {
      journeyData: journeyData
    }
  }
}

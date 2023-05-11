import Tour from '@/components/Tour';
import Head from 'next/head'
import clientPromise from '../../lib/mongodb';
import Navbar from './../components/Navbar'

export default function Home({ tours }) {
  console.log(tours)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <div className="grid grid-cols-4 gap-4 mx-20 mt-10">
          {tours?.map(tour => {
            return <Tour
              key={tour.title}
              title={tour.title}
              imgSrc={tour.image}
              href={tour.link}
              desc={tour.desc}
              price={tour.price}
            />
          })}
        </div>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  try {
    const client = await clientPromise;
    const db = client.db("test");

    const tours = await db
      .collection("tours")
      .find({})
      .toArray();

    return {
      props: { tours: JSON.parse(JSON.stringify(tours)) },
    };
  } catch (e) {
    console.error(e);
  }
}
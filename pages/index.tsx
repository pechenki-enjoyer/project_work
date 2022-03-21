import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'


const Home: NextPage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Head>
        <title>Personal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <Header />

     <div className='flex justify-between items-center bg-[#3cbdf5] border-y border-black
     py-10 lg:py-10'>
       <div className='px-10 space-y-5'>
        <h1 className='text-6xl max-w-wl font-serif'>This is simply a <span className='underline decoration-black decoration-4'>pattern</span>. Feel free to change anything</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima unde doloribus officiis consequatur ipsa? Neque dignissimos aut, saepe nemo sed atque iste autem numquam, cupiditate similique adipisci cum, accusantium ea.
        </h2>
       </div>
       <img 
       className='hidden md:inline-flex h-32 lg:h-full'
       src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png" 
       alt="" />
     </div>
    </div>
  )
}

export default Home

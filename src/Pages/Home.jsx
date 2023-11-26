import React from 'react';

import Banner from '../Components/Banner';
import HouseList from '../Components/HouseList';


const Home = () => {
  return (
    <main  className='min-h-[1800px]'>
      <Banner />
      <HouseList />
    </main>
  )
}

export default Home;
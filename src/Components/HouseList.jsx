import React from 'react';
import { Link } from 'react-router-dom';

import { useHouseContext } from '../Context/HouseContext';

import House from './House';

import { ImSpinner2 } from 'react-icons/im';

const HouseList = () => {

    const { searchedResults, loading } = useHouseContext();

  return (
    <section className='mb-20 flex justify-items-center'>
        <div className="container mx-auto ">

            {  loading && <ImSpinner2 className='mx-auto mt-[200px] text-violet-700 text-4xl animate-spin' /> }
               
            { !loading && searchedResults.length ? ( <div className=' mx-auto grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 lg:gap-8'> 
                        
                            { searchedResults.map((house, index) => {
                            return (<Link to={`Property/${house.id}`} key={index} >
                                        <House house={house} />   
                                    </Link> 
                            ) 
                            })

                            }
                         </div>
        
            ): (
                <h3 className='text-3xl text-gray-400 mt-48 text-center mx-auto' >Sorry, nothing found</h3>
            )}
        </div>
    </section>
  )
}

export default HouseList;
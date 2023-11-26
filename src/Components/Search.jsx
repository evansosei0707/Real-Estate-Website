import React from 'react';

import CountryDropDown from './CountryDropDown';
import PriceDropdown from './PriceDropdown';
import PropertyDropdown  from './PropertyDropdown';

import { useHouseContext } from '../Context/HouseContext';

import { RiSearch2Line }  from 'react-icons/ri';

const Search = () => {

    const { handleClick } = useHouseContext();

  return (
    <div className="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col items-center lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-md bg-white lg:bg-transparent lg:backdrop-blur rounded-lg ">
        <CountryDropDown />
        <PropertyDropdown />
        <PriceDropdown />
        <button onClick={handleClick}  className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
            <RiSearch2Line />
        </button>
    </div>
  )
}

export default Search;
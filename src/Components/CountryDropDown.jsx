import React, {useState} from 'react';
import { useHouseContext } from '../Context/HouseContext';

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';


const CountryDropDown = () => {

    const { country, setCountry, countries,houses } = useHouseContext();

    const [isOpen, setIsOpen] = useState(false)


  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full justify-between'>
            <RiMapPinLine  className='text-2xl mr-[18px] text-violet-700' />
            <div className='flex flex-col mr-20 lg:mr-8'>
                <div className='text-[15px] font-medium leading-tight'>{country === ''? 'Location (any)': country }</div>
                <div className='text-[13px]'>Select you place</div>
            </div>
            <div className=' pr-3 '> 
                {
                    isOpen ? (
                        <RiArrowUpSLine className='text-2xl mr-[18px] text-violet-700 ml-auto' />
                    ) : (
                        <RiArrowDownSLine className='text-2xl mr-[18px] text-violet-700 ml-auto' />
                    )
                }
            </div>
        </Menu.Button>
        <Menu.Items className=' px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg'>
            {countries.map((nation, index) => (
                <Menu.Item 
                onClick={() => setCountry(nation)}
                className='cursor-pointer hover:text-violet-700 transition' as='li' key={index} >
                    {nation === ''? 'Location (any)': nation }
                </Menu.Item>
            ))}
        </Menu.Items>

    </Menu>
  )

};

export default CountryDropDown;
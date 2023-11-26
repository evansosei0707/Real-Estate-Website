import React, {useState} from 'react';
import { useHouseContext } from '../Context/HouseContext';

import { RiWallet3Line,  RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { Menu } from '@headlessui/react';


const PriceDropdown = () => {

    const { price, setPrice} = useHouseContext();

    const [isOpen, setIsOpen] = useState(false);

    const prices = [
        {
            value: ''
        },
        {
            value: '100000 - 130000'
        },
        {
            value: '130000 - 160000'
        },
        {
            value: '190000 - 220000'
        },
        {
            value: '10000 - 30000'
        },
        {
            value: '30000 - 40000'
        }
    ]


  return (
    <Menu as='div' className='w-full lg:max-w-[296px] cursor-pointer relative'>
        <Menu.Button onClick={() => setIsOpen(!isOpen)} className='flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left justify-between'>
            <RiWallet3Line  className='text-2xl mr-[18px] text-violet-700' />
            <div className='flex flex-col mr-20 lg:mr-8'>
                <div className='text-[15px font-medium leading-tight'>{ price === '' ? 'Price range (any)': price }</div>
                <div className='text-[13px]'>Choose price range</div>
            </div>
            <div className=' pr-3  '> 
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
            {prices.map((price, index) => (
                <Menu.Item 
                onClick={() => setPrice(price.value)}
                className='cursor-pointer hover:text-violet-700 transition' as='li' key={index} >
                    {price.value === '' ? 'Price range (any)': price.value }
                </Menu.Item>
            ))}
        </Menu.Items>

    </Menu>
  )

};

export default PriceDropdown;
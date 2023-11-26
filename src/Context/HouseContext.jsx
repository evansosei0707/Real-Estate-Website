import React, { useState, useEffect, createContext, useContext } from 'react';

import { housesData } from '../Data';

const  HouseContext = createContext();



const HouseContextProvider = ({ children }) => {
    const [houses, setHouses] = useState(housesData);
    const [country, setCountry] = useState('');
    const [countries, setCountries] = useState([])
    const [property, setProperty] = useState('')
    const [properties, setProperties] = useState([])
    const [price, setPrice] = useState('');
    const [loading, setLoading] = useState(false);
    const [searchedResults, setSearchedResults] = useState(housesData)

    useEffect(() => {
        const allCountries = houses.map(house => {
            return house.country;
        })
        const uniqueCountries = ['', ...new Set(allCountries)]
        
        setCountries(uniqueCountries);

        // Properties Array set up 

        const allProperties = houses.map(house => {
            return house.type;
        })
        const uniqueProperties = ['', ...new Set(allProperties)]

        setProperties(uniqueProperties);

    }, []);

   
    const handleClick = () => {
        setLoading(true);

        const countryValue = country || ''; // Use an empty string if no option is selected
        const propertyValue = property || ''; // Use an empty string if no option is selected
        const priceMinValue = price.split(' ')[0] || ''; // Use an empty string if no option is selected
        const priceMaxValue = price.split(' ')[2] || ''; // Use an empty string if no option is selected


        const filteredResults = houses.filter((house) => (
            house.country.toLowerCase().includes(countryValue.toLowerCase()) && 
            house.type.toLowerCase().includes(propertyValue.toLowerCase()) &&
            (
                house.price >= parseFloat(priceMinValue) || priceMinValue === ''
            ) &&
            (
                house.price <= parseFloat(priceMaxValue) || priceMaxValue === ''
            )
        ));

        //console.log(filteredResults);

        setTimeout(() => {
            setSearchedResults(filteredResults); 
            setLoading(false); 
        },1000)
    }

    return <HouseContext.Provider value={{
        country, setCountry, property, setProperty, countries, properties, price, setPrice, houses, loading, searchedResults, handleClick
    }}>
        {children}
    </HouseContext.Provider>
};

export const useHouseContext = () => {
    return useContext(HouseContext);
}

export default HouseContextProvider;
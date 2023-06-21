import React, { useEffect, useState } from 'react';
import SearchFilter from '../../molecules/Search';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';

const tableHeadline = [
    'Rocket name',
    'Diameter',
    'Height',
    'Mass',
    'Cost per launch',
  ];
  

const SearchTable = () => {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await API.getProducts();
        setRockets(data);
      } catch (error) {
        console.error('Error fetching rocket data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <SearchFilter />
      {rockets.length > 0 ? (
        <Table rockets={rockets} headline={tableHeadline}/>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchTable;

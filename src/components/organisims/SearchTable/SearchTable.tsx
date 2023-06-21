import React, { useEffect, useState } from 'react';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';
import Search from '../../molecules/Search';
import { IRocket } from '../../molecules/Table/Table';

const tableHeadline = [
  'Rocket name',
  'Diameter',
  'Height',
  'Mass',
  'Cost per launch',
];

const SearchTable = () => {
  const [rockets, setRockets] = useState<IRocket[]>([]);
  const [searchValue, setSearchValue] = useState('');

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

  const handleSearchValueChange = (value: string) => {
    setSearchValue(value);
  };

  const filteredRockets = rockets.filter((rocket) => {
    const searchLower = searchValue.toLowerCase();
    const diameter = rocket.diameter.meters.toString();
    const height = rocket.height.meters.toString();
    const mass = rocket.mass.kg.toString();
    const costPerLaunch = rocket.cost_per_launch.toString();

    return (
      rocket.rocket_name.toLowerCase().includes(searchLower) ||
      rocket.description.toLowerCase().includes(searchLower) ||
      rocket.rocket_id.toLowerCase().includes(searchLower) ||
      rocket.rocket_type.toLowerCase().includes(searchLower) ||
      diameter.includes(searchLower) ||
      height.includes(searchLower) ||
      mass.includes(searchLower) ||
      costPerLaunch.includes(searchLower)
    );
  });

  return (
    <div>
      <Search
        searchValue={searchValue}
        setSearchValue={handleSearchValueChange}
      />
      {rockets.length > 0 ? (
        <Table rockets={filteredRockets} headline={tableHeadline} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SearchTable;

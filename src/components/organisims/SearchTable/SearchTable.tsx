import { useEffect, useState } from 'react';
import Table from '../../molecules/Table';
import { API } from '../../../shared/api';
import Search from '../../molecules/Search';
import { IRocket } from '../../molecules/Table/Table';
import { StyledSearchTable } from './styles';

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
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  const filteredRockets = rockets.filter((rocket) => {
    const searchLower = searchValue.toLowerCase();
    const name = rocket.rocket_name.toLowerCase();
    const diameter = rocket.diameter.meters.toString();
    const height = rocket.height.meters.toString();
    const mass = rocket.mass.kg.toString();
    const costPerLaunch = rocket.cost_per_launch.toString();

    return (
      name.toLowerCase().includes(searchLower) ||
      diameter.includes(searchLower) ||
      height.includes(searchLower) ||
      mass.includes(searchLower) ||
      costPerLaunch.includes(searchLower)
    );
  });

  return (
    <StyledSearchTable>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        resultsCount={filteredRockets.length}
      />
      {filteredRockets.length > 0 ? (
        <Table rockets={filteredRockets} headline={tableHeadline} />
      ) : (
        <p>No results found</p>
      )}
    </StyledSearchTable>
  );
};

export default SearchTable;

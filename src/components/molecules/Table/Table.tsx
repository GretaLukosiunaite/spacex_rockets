import React, { useEffect, useState } from 'react';

import { StyledTable, StyledHeadlineRow, StyledRow, StyledHeadlineContainer, StyledDataContainer, } from './styles';

export interface IRocket {
  id: number;
  cost_per_launch: number;
  height: {
    meters: number;
    feet: number;
  };
  diameter: {
    meters: number;
    feet: number;
  };
  mass: {
    kg: number;
    lb: number;
  };
  description: string;
  rocket_id: string;
  rocket_name: string;
  rocket_type: string;
}

// interface ISearchData {
//   headlines: string[];
//   rockets: IRocket[];
// }

// interface ISeatchProps {
//   data: ISearchData;
// }

interface ITableProps {
  headline: string[];
  rockets: IRocket[];
}

const Table = ({headline, rockets}: ITableProps) => {
  // const [searchValue, setSearchValue] = useState('');

  // const filteredRockets = props.rockets.filter((rocket) =>
  //   rocket.rocket_name.toLowerCase().includes(searchValue.toLowerCase())
  // );

  return (
    <StyledTable>
      <StyledHeadlineRow>
        {headline.map((headline, index) => (
          <StyledHeadlineContainer key={index} className='table-header'>
            <h6>{headline}</h6>
          </StyledHeadlineContainer>
        ))}
      </StyledHeadlineRow>
      {rockets.map((rocket, index) => (
        <StyledRow key={index}>
          <StyledDataContainer>
            <p>{rocket.rocket_name}</p>
          </StyledDataContainer>
          <StyledDataContainer>
            <p>{rocket.diameter.meters}m</p>
          </StyledDataContainer>
          <StyledDataContainer>
            <p>{rocket.height.meters}m</p>
          </StyledDataContainer>
          <StyledDataContainer>
            <p>{rocket.mass.kg}kg</p>
          </StyledDataContainer>
          <StyledDataContainer>
            <p>{rocket.cost_per_launch}</p>
          </StyledDataContainer>
        </StyledRow>
      ))}
    </StyledTable>
  );
};

export default Table;

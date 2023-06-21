import React, { useState } from 'react';
import Input from '../../atoms/Input';
import ICONS from '../../../assets/icons';
import {
  StyledTopLine,
  StyledTitleContainer,
  StyledResultsContainer,
  StyledSearchContainer,
} from './styles';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <StyledTopLine>
      <StyledTitleContainer>
        <h3>SpaceX rockets</h3>
      </StyledTitleContainer>
      <StyledResultsContainer>
        <p>3 Results</p>
      </StyledResultsContainer>
      <StyledSearchContainer>
        <Input
          type={'text'}
          value={searchValue}
          setvalue={setSearchValue}
          icon={ICONS.search}
          placeholder='Search'
        />
      </StyledSearchContainer>
    </StyledTopLine>
  );
};

export default Search;

import React, { useState } from 'react';
import Input from '../../atoms/Input';
import ICONS from '../../../assets/icons';
import {
  StyledLine,
  StyledTitleContainer,
  StyledResultsContainer,
  StyledSearchContainer,
} from './styles';

interface ISearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const Search = ({ searchValue, setSearchValue }: ISearchProps) => {

  return (
    <StyledLine>
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
          setValue={setSearchValue}
          icon={ICONS.search}
          placeholder='Search'
        />
      </StyledSearchContainer>
    </StyledLine>
  );
};

export default Search;

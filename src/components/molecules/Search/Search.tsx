import Input from '../../atoms/Input';
import ICONS from '../../../assets/icons';
import {
  StyledLine,
  StyledTitleContainer,
  StyledResultsContainer,
  StyledSearchContainer, StyledTopBox
} from './styles';

interface ISearchProps {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>> | (() => void);
  resultsCount: number;
}

const Search = ({ searchValue, setSearchValue, resultsCount }: ISearchProps) => {
  return (
    <StyledLine>
      <StyledTopBox>
      <StyledTitleContainer>
        <h3>SpaceX rockets</h3>
      </StyledTitleContainer>
      <StyledResultsContainer>
        <p>{resultsCount} Results</p>
      </StyledResultsContainer>
      </StyledTopBox>
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

import { styled } from 'styled-components';

export const StyledLine = styled.div`
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  padding: 10px 17px 7px 24px;
  width: 100%;
  gap: 7px;

  @media (min-width: 1090px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const StyledTopBox = styled.div`
  display: flex;
  gap: 13px;
  align-items: center;
`;
export const StyledTitleContainer = styled.div`
  min-width: 191px;

  h3 {
    text-align: left;
    font-family: var(--secondary-font-family);
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 100%;
    color: #283049;
  }
`;

export const StyledResultsContainer = styled.div`
  min-width: 79px;
  width: 100%;
  p {
    text-align: left;
    font-size: 0.875rem;
    line-height: 140.62%;
    font-weight: 300;
  }

  @media (min-width: 1090px) {
    margin-right: 20px;
  }
`;
export const StyledSearchContainer = styled.div`
  width: 100%;
`;

import { styled } from 'styled-components';

export const StyledSearchTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: flex-start;
  margin: 27px 0px 0 45px;
  overflow: auto;

  @media (min-width: 1090px) {
    align-items: center;
    max-width: 1097px;
    margin: 27px auto 0 auto;
  }
`;

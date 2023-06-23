import { styled } from 'styled-components';

export const StyledSearchTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 52px;
  align-items: flex-start;
  margin-top: 27px;
  overflow: auto;

  @media (min-width: 964px) {
    align-items: center;
  }
`;

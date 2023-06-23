import { styled } from 'styled-components';

export const StyledTable = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
 width: 1097px;
  gap: 3px;
`;

export const StyledHeadlineRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 57px 0px 27px;
  width: 100%;
`;

export const StyledHeadlineContainer = styled.div`
  min-width: 109px;

  h6 {
    font-weight: 500;
    font-size: 0.875rem;
    line-height: 140.62%;
    letter-spacing: 0.1px;
    text-align: left;
  }

  &:nth-child(1),
  &:nth-child(4) {
    margin-right: 84px;
  }

  &:nth-child(3) {
    margin: 0 147px;
  }
`;

export const StyledRow = styled.div`
  background-color: #ffffff;
  border-radius: 8px;

  display: flex;
  align-items: center;

  padding: 17px 67px 18px 29px;
  max-width: 1097px;
  width: 100%;

`;

export const StyledDataContainer = styled.div`
  min-width: 109px;

  p {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 100%;
    letter-spacing: 0.25px;
    text-align: right;
  }

  &:nth-child(1) p {
    text-align: left;
  }

  &:nth-child(1) {
    margin-right: 33px;
  }

  &:nth-child(2) {
    margin-right: 131px;
  }

  &:nth-child(3) {
    margin-right: 140px;
  }

  &:nth-child(4) {
    margin-right: 151px;
  }
`;


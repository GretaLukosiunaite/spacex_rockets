import { styled } from 'styled-components';

export const SyledInputDiv = styled.div`
  display: flex;
  align-items: center;

  background-color: #f5f5fa;
  border-radius: 50px;

  width: 753px;
  height: 35px;
  padding: 8px 0 8px 15px;
`;

export const SyledIcon = styled.span`
  color: #5a71e4;
  font-size: 14px;
`;

export const SyledInput = styled.input`
  width: calc(100% - 3%);
  outline: none;
  border: none;
  padding-left: 13px;

  font-size: 1rem;
  line-height: 100%;
  font-weight: 400;
  letter-spacing: 0.5px;
  color: #9b9eac;

  background-color: #f5f5fa;

  &::placeholder {
    color: #9b9eac;
  }
`;

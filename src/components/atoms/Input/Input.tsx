import React from 'react';
import { SyledIcon, SyledInput, SyledInputDiv } from './styles';

interface IInputProps {
  type: 'text' | 'number';
  value: string | number;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  icon: any;
  placeholder?: string;
}

const Input = ({ type, value, setValue, icon, placeholder }: IInputProps) => {
  return (
    <SyledInputDiv>
      <SyledIcon>{icon}</SyledIcon>
      <SyledInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder ? placeholder : ''}
      />
    </SyledInputDiv>
  );
};

export default Input;

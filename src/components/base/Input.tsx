import { accent, white } from '@/const/colors';
import styled from '@emotion/styled';
import React, { InputHTMLAttributes, useEffect, useState } from 'react';
import { InputContainer } from './StyledComponents';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  required?: boolean;
  showRequiredWarn?: boolean;
  name: string;
  register: (name: string) => any;
}

const StyledInput = styled.input`
  height: 40px;
  display: block;
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Chip = styled.div`
  position: absolute;
  top: -12px;
  padding: 2px 10px;
  color: ${accent};
  font-size: 12px;
  line-height: 1;
  font-weight: 500;
  opacity: 0.9;
  z-index: 0;

  border: 1.5px solid ${accent};
  border-radius: 30px;
  background-color: #ffffff;
  background-position: center center;

  transition: top 0.3s ease-in-out, opacity 0.2s ease-in-out;
  &.hide {
    opacity: 0;
    z-index: -1;
    top: 0px;
  }
`;

const Warning = styled.div`
  opacity: 0;
  left: 0;
  bottom: -24px;
  border-radius: 10px;
  position: absolute;
  color: ${accent};
  font-size: 12px;
  place-self: start;
  transition: opacity 0.5s ease-in-out;
  background: ${white};
  padding: 2px 10px;
`;

const Container = styled(InputContainer)`
  position: relative;
  transition: border-color 0.5s ease-in-out;
  &.warned {
    border: 1px solid ${accent};
    ${Warning} {
      opacity: 0.8;
    }
  }
`;

const Input = (props: InputProps) => {
  const [hasValue, setHasValue] = useState(
    props.value && props.value.toString().length > 0,
  );

  useEffect(() => {
    setHasValue(props.value && props.value.toString().length > 0);
  }, [props.value]);

  const className = props.className;

  return (
    <Container className={className}>
      <Chip className={hasValue ? '' : 'hide'}>{props.placeholder}</Chip>
      <StyledInput
        {...props.register(props.name)}
        {...{ ...props, ...{ className: undefined } }}
        onChange={(e) => {
          const value = e.target.value;
          setHasValue(value && value.length > 0);
          props.onChange && props.onChange(e);
        }}
      />
    </Container>
  );
};

export default Input;

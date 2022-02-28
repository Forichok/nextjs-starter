import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { accent, primary, white } from '@/const/colors';
import { InputContainer } from './StyledComponents';

export type PhoneNumber = { locale: string; number: string };

type InputProps = {
  className?: string;
  onChange?: (phone: PhoneNumber) => void;
  required?: boolean;
  value?: PhoneNumber;
  showRequiredWarn?: boolean;
};

const Input = styled(PhoneInput)``;

const PhoneExample = styled.div`
  position: absolute;
  height: 100%;
  display: flex;
  align-items: center;
  left: 68.4px;
  font-size: 16px;
  font-weight: 400;
  color: ${primary};
  line-height: 1.55;
  letter-spacing: 0.01rem;
  opacity: 0.3;
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Warning = styled.div`
  opacity: 0;
  left: 0;
  bottom: -24px;
  position: absolute;
  color: ${accent} !important;
  font-size: 12px;
  place-self: start;
  background: ${white};
  padding: 2px 10px;
  border-radius: 10px;
`;

const Container = styled(InputContainer)`
  position: relative;
  transition: border-color 0.5s ease-in-out;

  .react-tel-input {
    place-self: center;
  }

  * {
    color: ${primary};
  }

  &.warned {
    border: 1px solid ${accent};
    ${Warning} {
      opacity: 0.8;
    }
  }

  .form-control {
    font-family: 'geometria', Arial, sans-serif;
    width: 100%;
    border: none;
    font-size: 16px;
    font-weight: 400;
    color: ${primary};
    line-height: 1.55;
    letter-spacing: 0.01rem;
    z-index: 10;
    background: transparent;
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
  .flag-dropdown {
    /* z-index: 20; */
    border: none;
    background: transparent;
    margin-bottom: 5px;
  }
  .search {
    display: flex;
    margin-right: 10px;
  }

  .search .search-box {
    flex: 1;
  }

  .country .dial-code {
    float: right;
    margin-right: 10px;
  }

  .country .flag {
    float: right;
  }
  .country .country-name {
    font-size: 14px;
  }
`;

const getPlaceholder = (value: string, format: string) => {
  const nums = value.split('');
  const placeholder = format.split('');

  let i = placeholder.indexOf('.');
  let nextNum = nums.shift();
  while (i != -1 && nextNum) {
    placeholder[i] = nextNum;
    i = placeholder.indexOf('.');
    nextNum = nums.shift();
  }

  i = placeholder.indexOf('.');
  while (i != -1) {
    placeholder[i] = '9';
    i = placeholder.indexOf('.');
  }

  return placeholder.join('');
};

const RocketPhoneInput = ({
  className,
  onChange,
  required,
  value,
  showRequiredWarn,
}: InputProps) => {
  const [valueState, setValue] = useState(
    value ? `${value.locale}${value.number}` : '7',
  );

  useEffect(() => {
    setValue(value ? `${value.locale}${value.number}` : '7');
  }, [value]);
  const [placeholder, setFormat] = useState('+. (...) ...-..-..');
  const [warnRequired, setWarnRequired] = useState(true);
  return (
    <Container
      className={
        className + `${showRequiredWarn && warnRequired ? ' warned' : ''}`
      }
    >
      <Input
        countryCodeEditable={false}
        value={valueState}
        onChange={(
          value: string,
          data: { countryCode: string; format: string; dialCode: string },
        ) => {
          onChange &&
            onChange({
              number: value.substring(
                value.indexOf(data.dialCode) + data.dialCode.length,
              ),
              locale: data.dialCode,
            });
          setValue(value);
          setFormat(data.format);
          if (required) {
            setWarnRequired(
              (data.format.match(/\./g) || []).length != value.length,
            );
          }
        }}
        country="ru"
        enableSearch={true}
      />
      <Warning>Это обязательное поле</Warning>

      <PhoneExample>{getPlaceholder(valueState, placeholder)}</PhoneExample>
    </Container>
  );
};

export default RocketPhoneInput;

import {
  white,
  accent,
  accentFocused,
  border,
  primary,
  green,
} from '@/const/colors';
import styled from '@emotion/styled';
import { HTMLAttributes } from 'react-dom/node_modules/@types/react';
import Image, { ImageProps } from 'next/image';

export interface ElementProps extends HTMLAttributes<HTMLElement> {
  className?: string;
}

export const Button = styled.button`
  width: fit-content;
  color: ${white};
  height: 60px;
  font-size: 15px;
  line-height: 1.55;
  font-weight: 700;
  border-width: 3px;
  border-radius: 30px;
  background-color: ${accent};
  background-position: center center;
  border-color: ${accent};
  border-style: solid;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out, font 0.2s ease-in-out;

  outline: none;

  &:not(:disabled):hover {
    background-color: ${white};
    color: ${accent};
    cursor: pointer;
  }

  &:disabled {
    opacity: 0.7;
  }
`;

export const BorderButton = styled(Button)`
  background-color: ${white};
  color: ${accent};

  &:not(:disabled):hover {
    background-color: ${accent};
    color: ${white};
  }
`;

export const ThinBorderedButton = styled(BorderButton)`
  height: fit-content;
  border-radius: 5px;
  border-width: 2.5px;
`;

export const ThinBorderedGreenButton = styled(ThinBorderedButton)`
  color: ${green};
  border-color: ${green};
  &:hover,
  &:not(:disabled):hover {
    background-color: ${green};
  }
`;

export const FilledButton = styled(Button)`
  &:not(:disabled):hover {
    background-color: ${accentFocused};
    border-color: ${accentFocused};
    color: ${white};
  }
`;

export const RocketInputContainer = styled.div`
  background-color: ${white};
  border: 2px solid ${border};
  border-radius: 30px;
  /* height: 58px; */
  padding: 0 20px;
  display: flex;
`;

export const RocketTitle = styled.div`
  color: ${primary};
  font-size: 48px;
  line-height: 1.35;
  font-weight: 900;
  @media (max-width: 960px) {
    font-size: 40px;
  }
  @media (max-width: 640px) {
    font-size: 34px;
  }
`;

export const RocketDescription = styled.span`
  color: ${primary};
  font-size: 14px;
  line-height: 1.55;
  font-weight: 400;
  @media (max-width: 960px) {
    font-size: 12px;
  }
`;

export const RocketSubTitle = styled.span`
  text-align: left;
  font-weight: 600;
  font-size: 24px;
  color: ${primary};

  @media (max-width: 1200px) {
    font-size: 22px;
  }
  @media (max-width: 640px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

export const RocketSubSubTitle = styled.span`
  text-align: left;
  font-weight: 600;
  font-size: 20px;
  color: ${primary};

  @media (max-width: 1200px) {
    font-size: 18px;
  }
  @media (max-width: 640px) {
    font-size: 16px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ErrorMessage = styled.div`
  color: ${accent};
`;

export const OrderCard = styled.div`
  position: relative;
  display: flex;
  border-radius: 15px;
  box-shadow: 0px 0px 10px 3px rgb(32 34 70 / 10%);
  padding: 50px;
`;

export const StandardLink = styled.a`
  cursor: pointer;
  color: ${accent};
`;

export const NextJSImage = ({
  className,
  src,
  alt,
  height,
  width,
}: ElementProps & ImageProps) => {
  return (
    <div className={className}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        objectFit="contain"
        width={width || 1}
        height={height || 1}
      />
    </div>
  );
};

export const PageContainer = styled.div`
  flex-direction: column;
  padding: 100px;
  flex: 1;
  width: -webkit-fill-available;
  align-self: center;
  display: flex;
  max-width: 1200px;
  @media (max-width: 960px) {
    padding: 20px 80px;
  }

  @media (max-width: 860px) {
    padding: 20px 50px;
  }

  @media (max-width: 710px) {
    padding: 20px 50px;
  }

  @media (max-width: 510px) {
    padding: 20px;
  }
`;

export const FieldLabel = styled(RocketDescription)`
  font-size: 16px !important;
  min-width: 200px;
  width: 200px;
`;

export const Field = styled.div`
  display: flex;
  max-width: 700px;
  padding: 0px 0px;

  ${FieldLabel} {
    margin-right: 15px;
  }

  @media (max-width: 620px) {
    flex-direction: column;
    ${FieldLabel} {
      margin-bottom: 10px;
    }
  }
`;

export const BlockTitle = styled.span`
  font-weight: 600;
  display: inline-flex;
`;

export const DataBlock = styled.div`
  margin-bottom: 10px;

  ${ThinBorderedButton} {
    float: right;
  }

  ${BlockTitle} {
    margin-bottom: 15px;
  }
  ${Field} {
    margin-bottom: 15px;
  }
`;

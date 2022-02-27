declare module '*.jpg';
declare module '*.png';

declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >;
  const src: string;
  export default src;
}

export type PhoneNumberResponse = {
  id?: string;
  locale: string;
  number: string;
};

export type DateRange = {
  startDate: Date;
  endDate: Date;
};

export type Option<T> = {
  value: T;
  label: string;
};

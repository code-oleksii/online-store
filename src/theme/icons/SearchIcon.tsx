import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const SearchIcon: FC<IIconClassProps> = ({ iconClass }) => {
  const combineClass = `icon-${iconClass}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className={combineClass}
    >
      <path
        d="M22.6667 22.6667L28 28M4 14.6667C4 17.4956 5.12381 20.2088 7.12419 22.2091C9.12458 24.2095 11.8377 25.3333 14.6667 25.3333C17.4956 25.3333 20.2088 24.2095 22.2091 22.2091C24.2095 20.2088 25.3333 17.4956 25.3333 14.6667C25.3333 11.8377 24.2095 9.12458 22.2091 7.12419C20.2088 5.12381 17.4956 4 14.6667 4C11.8377 4 9.12458 5.12381 7.12419 7.12419C5.12381 9.12458 4 11.8377 4 14.6667Z"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

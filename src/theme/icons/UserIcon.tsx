import { IIconClassProps } from '@/types';
import { FC } from 'react';

export const UserIcon: FC<IIconClassProps> = ({ iconClass }) => {
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
        d="M16.0001 2.66666C8.63608 2.66666 2.66675 8.63599 2.66675 16C2.66675 23.364 8.63608 29.3333 16.0001 29.3333C23.3641 29.3333 29.3334 23.364 29.3334 16C29.3334 8.63599 23.3641 2.66666 16.0001 2.66666Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.69458 24.4613C5.69458 24.4613 8.66658 20.6667 15.9999 20.6667C23.3332 20.6667 26.3066 24.4613 26.3066 24.4613M15.9999 16C17.0608 16 18.0782 15.5786 18.8283 14.8284C19.5785 14.0783 19.9999 13.0609 19.9999 12C19.9999 10.9391 19.5785 9.92172 18.8283 9.17157C18.0782 8.42143 17.0608 8 15.9999 8C14.939 8 13.9216 8.42143 13.1715 9.17157C12.4213 9.92172 11.9999 10.9391 11.9999 12C11.9999 13.0609 12.4213 14.0783 13.1715 14.8284C13.9216 15.5786 14.939 16 15.9999 16Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

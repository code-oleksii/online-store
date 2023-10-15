import { styled } from 'styled-components';
import tw from 'twin.macro';

export const StyledCard = styled.div`
  ${tw`relative z-[1] flex flex-col gap-y-6 min-h-[425px] h-full py-4 bg-main-white overflow-hidden rounded-3xl transition-all`}

  &::after {
    ${tw`content-[''] absolute inset-x-0 inset-y-0 z-[-1] border border-4 border-main-red rounded-3xl opacity-0 transition-all`}
  }

  &:hover,
  &:active {
    &::after {
      ${tw`opacity-100`}
    }
  }
`;

export const StyledCardTop = styled.div`
  ${tw`flex items-center justify-between min-h-[28px] pr-4`}

  .MuiCheckbox-root {
    ${tw`w-6 h-6 ml-auto p-0 stroke-main-black`}
  }

  .Mui-checked {
    svg {
      ${tw`stroke-main-red fill-main-red`}
    }
  }
`;

export const StyledCardImg = styled.div`
  ${tw`shrink-0	h-[144px]`}

  img {
    ${tw`object-contain	w-full h-full`}
  }

  a {
    ${tw`flex justify-center h-full px-2`}
  }
`;

export const StyledCardInfo = styled.div`
  ${tw`flex flex-col gap-y-3 h-full px-4`}
`;

export const StyledPrices = styled.div`
  ${tw`flex items-center justify-between mt-auto`}
`;

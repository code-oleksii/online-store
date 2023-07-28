import { styled } from 'styled-components';
export const StyledHomeContent = styled.div`
  height: 2676px;
  background: #f8faff;
  text-align: center;
  margin: 50px;
  display: flex;
  flex-direction: column;
  gap: 72px;
  align-items: center;

  h1 {
    font-size: 50px;
    color: #fff;
  }
  @media (max-width: 980px) {
    gap:22px;
  }
`;

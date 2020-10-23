import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

const { yellow } = colors;

export const Logo = styled.svg`
  margin: 10px 0;
  width: 400px;
  height: 270px;
  stroke: ${yellow};

  @media (max-width: 425px) {
    width: 370px;
  }
`;

export const Yoda = styled.img`
  position: absolute;
  left: 0;
  width: 130px;
  height: 80px;
  margin-top: 20px;
  margin-left: 29px;

  @media (max-width: 425px) {
    display: none;
  }
`;

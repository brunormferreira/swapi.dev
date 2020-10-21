import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

const { yellow, white } = colors;

export const ContainerFooter = styled.footer`
  padding: 20px 0;
  margin-top: 30px;
  text-align: center;
  color: ${white};
  border-top: 1px solid ${yellow};
  width: 100%;
`;

export const Text = styled.a`
  color: ${yellow};
  font-weight: bold;
  text-decoration: none;
`;

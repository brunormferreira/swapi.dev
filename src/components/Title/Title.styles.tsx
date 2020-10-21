import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

const { yellow } = colors;

export const Title = styled.p`
  margin: 0 0 10px 0;
  font-size: 34px;
  letter-spacing: 2px;
  border-bottom: 1px solid ${yellow};
`;

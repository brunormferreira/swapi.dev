import styled from 'styled-components';

import { colors } from '../assets/styles/variables';

const { white } = colors;

export const ContainerApp = styled.div`
  max-width: 960px;
  margin: 0 auto;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${white};

  height: 100%;
  width: 100vw;
`;

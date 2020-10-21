import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

const { black, white, yellow } = colors;

export const MovieList = styled.li`
  width: 70%;
  margin: 15px 1% 15px;
  padding: 15px 20px;
  display: flex;
  flex-direction: column;
  background: ${black};
  color: ${white};
`;

export const Title = styled.h3`
  display: inline-block;
  margin: 0 0 10px;
  border-bottom: 1px solid ${yellow};
  padding-bottom: 3px;
  line-height: 2rem;
  font-size: 1.5rem;
`;

export const MoviesContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const GreenSaber = styled.img`
  bottom: 10px;
  width: auto;
  height: 80px;
`;

export const RedSaber = styled.img`
  bottom: 10px;
  width: auto;
  height: 80px;
  transform: scaleX(-1);
`;

export const MoviesInfo = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 1.5rem;
`;

import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

const { white, yellow, gray, overlay } = colors;

export const ContainerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${overlay} 0% 0% no-repeat padding-box;
  opacity: 0.3;
  z-index: 99;
`;

export const ModalFullScreen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 472px;
  min-height: 200px;
  background: rgb(0 0 0 / 82%) no-repeat padding-box;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.521);
  border-radius: 8px;
  border: 2px solid ${yellow};
  padding: 16px;
`;

export const ModalBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TitleModal = styled.h1`
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  letter-spacing: 0;
  color: ${white};
`;

export const CloseButton = styled.button`
  height: 25px;
  border: none;
  font-weight: 700;
  width: 25px;
  border-radius: 12px;
  float: right;
  cursor: pointer;

  &:hover {
    color: ${gray};
    border: 2px solid ${yellow};
  }
`;

export const ModalContent = styled.span`
  margin: 5px 0;
`;

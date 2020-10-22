import styled from 'styled-components';

export const ContainerBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #3d3d3d 0% 0% no-repeat padding-box;
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
  background: #fff 0% 0% no-repeat padding-box;
  box-shadow: 0px 2px 8px #0000001a;
  border-radius: 8px;
  padding: 16px;
`;

export const ModalBody = styled.div`
  justify-content: center;
  padding: 0 64px;
`;

export const TitleModal = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 28px;
  letter-spacing: 0;
  margin: 0 0 16px;
  color: black;
`;

import React, { useRef } from 'react';

import ReducerEnum from '../../context/modal/enum';

import { useModal } from '../../context/modal';

import useOutsideClick from '../../utils/useOutsideClick';

import {
  ContainerBackground,
  ModalFullScreen,
  ModalContainer,
  TitleModal,
  ModalBody,
} from './Modal.styles';

const Modal: React.FC = () => {
  const { dispatch } = useModal();

  const dialogContainer = useRef() as React.MutableRefObject<
    HTMLTableRowElement
  >;

  const onClose = (): void => dispatch({ type: ReducerEnum.SET_INVISIBLE });

  useOutsideClick(dialogContainer, () => {
    onClose();
  });

  return (
    <>
      <ContainerBackground />
      <ModalFullScreen>
        <ModalContainer ref={dialogContainer}>
          <button type="button" onClick={onClose}>
            X
          </button>
          <ModalBody>
            <TitleModal>TESTE</TitleModal>
          </ModalBody>
        </ModalContainer>
      </ModalFullScreen>
    </>
  );
};

export default Modal;

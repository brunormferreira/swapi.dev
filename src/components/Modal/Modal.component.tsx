import React, { useRef } from 'react';

import ReducerEnum from '../../context/modal/enum';

import { useModal } from '../../context/modal';

import {
  ContainerBackground,
  ModalFullScreen,
  ModalContainer,
  TitleModal,
  ModalBody,
  CloseButton,
  ModalContent,
} from './Modal.styles';

type Props = {
  movie: any;
};

const Modal = ({ movie }: Props): JSX.Element => {
  const { dispatch } = useModal();

  const dialogContainer = useRef() as React.MutableRefObject<
    HTMLTableRowElement
  >;

  const onClose = (): void => dispatch({ type: ReducerEnum.SET_INVISIBLE });

  return (
    <>
      <ContainerBackground />
      <ModalFullScreen>
        <ModalContainer ref={dialogContainer}>
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>
          <ModalBody>
            <TitleModal>{movie.title}</TitleModal>
            <ModalContent>~ Episode {movie.episode_id}</ModalContent>
            <ModalContent>{movie.opening_crawl}</ModalContent>
          </ModalBody>
        </ModalContainer>
      </ModalFullScreen>
    </>
  );
};

export default Modal;

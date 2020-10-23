import React from 'react';

import ReducerEnum from '../../context/modal/enum';
import { useModal } from '../../context/modal';

import MoviesInterface from '../../interfaces/Movies';

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
  movie: MoviesInterface;
};

const Modal = ({ movie }: Props): JSX.Element => {
  const { dispatch } = useModal();

  const { title, episode_id, opening_crawl } = movie;

  const onClose = () => dispatch({ type: ReducerEnum.SET_INVISIBLE });

  return (
    <>
      <ContainerBackground />
      <ModalFullScreen>
        <ModalContainer data-testid="modal-component">
          <CloseButton type="button" onClick={onClose}>
            X
          </CloseButton>
          <ModalBody>
            <TitleModal>{title}</TitleModal>
            <ModalContent>~ Episode {episode_id}</ModalContent>
            <ModalContent>{opening_crawl}</ModalContent>
          </ModalBody>
        </ModalContainer>
      </ModalFullScreen>
    </>
  );
};

export default Modal;

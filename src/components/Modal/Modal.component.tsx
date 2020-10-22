import React, { useRef } from 'react';

import ReducerEnum from '../../context/modal/enum';

import { useModal } from '../../context/modal';

import {
  ContainerBackground,
  ModalFullScreen,
  ModalContainer,
  TitleModal,
  ModalBody,
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
          <button type="button" onClick={onClose}>
            X
          </button>
          <ModalBody>
            <TitleModal>{movie.title}</TitleModal>
            <p style={{ color: 'black' }}>~ Episode {movie.episode_id}</p>
            <div style={{ color: 'black' }}>{movie.opening_crawl}</div>
          </ModalBody>
        </ModalContainer>
      </ModalFullScreen>
    </>
  );
};

export default Modal;

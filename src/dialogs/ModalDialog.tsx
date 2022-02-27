import React, { ReactElement } from 'react';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import { accent, white } from '@/const/colors';
import { IoIosCloseCircle } from 'react-icons/io';
import {
  BorderButton,
  RocketSubTitle,
} from '../components/base/StyledComponents';

Modal.setAppElement('#__next');

type ModalDialogProps = {
  className?: string;
  children?: any;
  title?: string | ReactElement;
  hideCloseButton?: boolean;
  okTitle?: string;
  cancelTitle?: string;
  onOk?: () => void;
  onCancel?: () => void;
} & Modal.Props;

const CloseButton = styled(IoIosCloseCircle)`
  top: 10px;
  right: 10px;
  position: absolute;
  cursor: pointer;
  :hover {
    color: ${accent};
  }
`;

const DialogButton = styled(BorderButton)`
  display: inline-flex;
  height: fit-content;
  margin-bottom: 10px;
  margin-right: 10px;
  align-self: end;
  border-width: 2px;
  padding: 5px 15px;
`;

const DialogContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  max-height: 70vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 20px;
  align-self: self-end;
`;

const DialogTitle = styled(RocketSubTitle)``;

const DialogContainer = styled.div`
  width: fit-content;
`;

const CustomModal = styled(Modal)`
  max-height: 80vh;
  display: flex;
  position: absolute;
  outline: none;
  min-width: 350px;
  flex-direction: column;
  align-items: center;
  background: ${white};
  border-radius: 10px;
  box-shadow: 0px 0px 10px 3px rgb(32 34 70 / 10%);

  @media (max-width: 560px) {
    padding-top: 100px;
    max-height: 100vh;
    top: 0;
    left: 0;
    height: 100%;
    width: -webkit-fill-available;
    ${CloseButton} {
      top: 80px;
    }
  }
  @media (min-width: 560px) {
    top: 50%;
    left: 50%;
    right: auto;
    bottom: auto;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
`;

const ModalDialog = ({
  className,
  children,
  isOpen,
  title,
  hideCloseButton,
  okTitle,
  cancelTitle,
  onOk,
  onCancel,
  onRequestClose,
}: ModalDialogProps) => {
  return (
    <CustomModal
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      preventScroll
      className={className}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
    >
      <DialogContainer>
        {title ? <DialogTitle>{title}</DialogTitle> : null}
        {!hideCloseButton ? (
          <CloseButton size={40} onClick={onRequestClose} />
        ) : null}
        <DialogContent>{children}</DialogContent>
        <ButtonContainer>
          {okTitle ? (
            <DialogButton onClick={onOk}>{okTitle}</DialogButton>
          ) : null}
          {cancelTitle ? (
            <DialogButton onClick={onCancel}>{cancelTitle}</DialogButton>
          ) : null}
        </ButtonContainer>
      </DialogContainer>
    </CustomModal>
  );
};

export default ModalDialog;

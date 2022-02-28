import React from 'react';
import styled from '@emotion/styled';
import { Description, SubTitle } from '../components/base/StyledComponents';
import ModalDialog from './ModalDialog';

type ConfirmationDialogProps = {
  className?: string;
  isOpen: boolean;
  message?: string;
  title: string;
  okTitle?: string;
  cancelTitle?: string;
  onClose?: () => void;
  onOk?: () => void;
  onCancel?: () => void;
};

const Dialog = styled(ModalDialog)`
  max-width: 460px;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const DialogTitle = styled(SubTitle)``;

const DialogMessage = styled(Description)`
  margin-top: 20px;
  padding: 10px 10px;
  border-radius: 10px;
  white-space: pre-line;
  line-height: 25px;
`;

const ConfirmationDialog = ({
  className,
  isOpen,
  title,
  message,
  okTitle,
  cancelTitle,
  onOk,
  onCancel,
  onClose,
}: ConfirmationDialogProps) => {
  return (
    <Dialog
      className={className}
      isOpen={isOpen}
      onRequestClose={onClose}
      okTitle={okTitle}
      cancelTitle={cancelTitle}
      onOk={onOk}
      onCancel={onCancel}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogMessage>{message}</DialogMessage>
    </Dialog>
  );
};

export default ConfirmationDialog;

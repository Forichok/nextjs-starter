import React from 'react';
import styled from '@emotion/styled';
import {
  RocketDescription,
  RocketSubTitle,
} from '../components/base/StyledComponents';
import ModalDialog from './ModalDialog';
import { error, success, warning } from '@/const/colors';

export enum DialogStatus {
  Warn,
  Success,
  Fail,
}

type StatusDialogProps = {
  className?: string;
  status: DialogStatus;
  isOpen: boolean;
  message?: string;
  title: string;
  onClose?: () => void;
};

const Dialog = styled(ModalDialog)`
  max-width: 460px;
  padding: 40px;
  display: flex;
  flex-direction: column;
`;

const DialogTitle = styled(RocketSubTitle)``;

const DialogMessage = styled(RocketDescription)`
  margin-top: 20px;
  padding: 20px 10px;
  border-radius: 10px;
  white-space: pre-line;
  line-height: 25px;
  &.success {
    background: ${success};
  }
  &.warning {
    background: ${warning};
  }
  &.failure {
    background: ${error};
  }
`;

const StatusDialog = ({
  className,
  isOpen,
  title,
  message,
  status,
  onClose,
}: StatusDialogProps) => {
  let dialogStyle = 'warning';
  switch (status) {
    case DialogStatus.Fail:
      dialogStyle = 'failure';
      break;
    case DialogStatus.Success:
      dialogStyle = 'success';
      break;
  }
  return (
    <Dialog className={className} isOpen={isOpen} onRequestClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogMessage className={dialogStyle}>{message}</DialogMessage>
    </Dialog>
  );
};

export default StatusDialog;

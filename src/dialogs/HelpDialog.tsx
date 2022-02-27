import React, { useState } from 'react';
import styled from '@emotion/styled';
import { accent, error, success } from '@/const/colors';
import { HelpType } from '@/api/telegramApi';
import RocketInput from '../components/base/RocketInput';
import ModalDialog from './ModalDialog';
import { telegramApi } from '@/api/apiClient';
import RocketPhoneInput, {
  PhoneNumber,
} from '@/components/base/RocketPhoneInput';
import {
  RocketSubTitle,
  FilledButton,
} from '@/components/base/StyledComponents';
import PolicyAgreement from '@/components/PolicyAgreement';

type ModalDialogProps = {
  className?: string;
  isOpen: boolean;
  title: string;
  highlightedTitle?: string;
  buttonTitle: string;
  helpType: HelpType;
  onClose?: () => void;
};

const Dialog = styled(ModalDialog)`
  max-width: 460px;
`;

const DialogCommonTitle = styled(RocketSubTitle)`
  display: inline;
`;

const DialogHighlightedTitle = styled(RocketSubTitle)`
  display: inline;
  color: ${accent};
`;

const DialogContainer = styled.div`
  padding: 40px;
`;
const DialogTitle = styled.div``;

const NameInput = styled(RocketInput)`
  margin: 25px 0;
  min-height: 45px;
`;

const PhoneInput = styled(RocketPhoneInput)`
  margin: 25px 0;
  min-height: 45px;
`;

const SubmitButton = styled(FilledButton)`
  width: 100%;
`;

const MessageStatus = styled.div`
  background: ${success};
  margin-top: 20px;
  padding: 20px 10px;
  border-radius: 10px;
`;

const SuccessStatus = styled(MessageStatus)`
  background: ${success};
`;

const ErrorStatus = styled(MessageStatus)`
  background: ${error};
`;

enum Status {
  None,
  Success,
  Fail,
}

const MESSAGE_SHOW_TIME = 6000;

const HelpDialog = ({
  className,
  isOpen,
  title,
  highlightedTitle,
  helpType,
  buttonTitle,
  onClose,
}: ModalDialogProps) => {
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<PhoneNumber>();
  const [policyAccepted, setPolicyAccepted] = useState(false);
  const [warnRequired, setWarnRequired] = useState(false);
  const [status, setStatus] = useState<Status>(Status.None);

  return (
    <Dialog className={className} isOpen={isOpen} onRequestClose={onClose}>
      <DialogContainer>
        <DialogTitle>
          <DialogCommonTitle>
            {`${title} `}
            <DialogHighlightedTitle>
              {`${highlightedTitle}`}
            </DialogHighlightedTitle>
          </DialogCommonTitle>
        </DialogTitle>
        {status == Status.None ? (
          <>
            <NameInput
              showRequiredWarn={warnRequired}
              required
              placeholder="Ваше имя"
              onChange={(e) => setName(e.target.value)}
            />
            <PhoneInput
              showRequiredWarn={warnRequired}
              required
              onChange={setPhone}
            />
            <PolicyAgreement
              showRequiredWarn={warnRequired}
              onChange={setPolicyAccepted}
            />
            <SubmitButton
              onClick={() => {
                if (
                  policyAccepted &&
                  name &&
                  phone &&
                  phone.number.length == 10 // TODO remove hardcode
                ) {
                  setWarnRequired(false);
                  telegramApi
                    .help(
                      name,
                      { locale: phone.locale, number: phone.number },
                      helpType,
                    )
                    .then(() => {
                      setStatus(Status.Success);
                      setTimeout(() => {
                        setStatus(Status.None);
                        onClose && onClose();
                      }, MESSAGE_SHOW_TIME);
                    })
                    .catch((e) => {
                      setStatus(Status.Fail);
                      console.error(e);
                      setTimeout(() => {
                        setStatus(Status.None);
                      }, MESSAGE_SHOW_TIME);
                    });
                } else {
                  setWarnRequired(true);
                }
              }}
            >
              {buttonTitle}
            </SubmitButton>
          </>
        ) : null}
        {status == Status.Success ? (
          <SuccessStatus>
            Спасибо! Мы получили Вашу заявку и скоро с Вами свяжемся!
          </SuccessStatus>
        ) : null}

        {status == Status.Fail ? (
          <ErrorStatus>
            Ууупс... Что-то пошло не так, повторите попытку или попробуйте позже
            :(
          </ErrorStatus>
        ) : null}
      </DialogContainer>
    </Dialog>
  );
};

export default HelpDialog;

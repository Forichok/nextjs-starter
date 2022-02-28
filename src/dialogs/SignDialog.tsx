/* eslint-disable react/display-name */
import React, { useState } from 'react';
import styled from '@emotion/styled';
import { error, success } from '@/const/colors';
import ModalDialog from './ModalDialog';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/StyledComponents';
import Input from '@/components/base/Input';

type ModalDialogProps = {
  className?: string;
  isOpen: boolean;
  title: string;
  highlightedTitle?: string;
  buttonTitle: string;
  onClose?: () => void;
};

const Dialog = styled(ModalDialog)`
  max-width: 460px;
`;

const DialogContainer = styled.div`
  padding: 20px;
  box-sizing: border-box;
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

const ButtonContainer = styled.div`
  justify-content: end;
  display: flex;
`;

const Form = styled.form`
  width: 100%;
  & > * {
    margin-bottom: 15px;
  }
`;

enum Status {
  None,
  Success,
  Fail,
}

const SignDialog = ({
  className,
  isOpen,
  title,
  onClose,
}: ModalDialogProps) => {
  const [status, setStatus] = useState<Status>(Status.None);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    shouldUseNativeValidation: true,
  });
  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <Dialog
      title={title}
      className={className}
      isOpen={isOpen}
      onRequestClose={onClose}
    >
      <DialogContainer>
        {status == Status.None ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
              register={register}
              name="firstName"
              placeholder="Baшe имя"
            />
            <Input
              register={register}
              name="patronymic"
              placeholder="Ваше отчество"
            />
            <Input
              register={register}
              name="lastName"
              placeholder="Baша фамилия"
            />
            <Input
              register={register}
              name="organization"
              placeholder="Организация"
            />
            <Input register={register} name="post" placeholder="Должность" />
            <ButtonContainer>
              <Button type="submit">Отправить подпись</Button>
            </ButtonContainer>

            {errors.name && <p>{errors.name.message}</p>}
          </Form>
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

export default SignDialog;

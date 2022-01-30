import React from 'react';
import styled from 'styled-components';
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg';
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import palette from '../../styles/palette';

const SignUpModal: React.FC = () => {
  return (
    <Container>
      <CloseXIcon className="mordal-close-x-icon" />
      <InputWrapper>
        <Input type="email" placeholder="이메일 주소" name="email" />
        <MailIcon />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="이름(예: 민욱)" />
        <PersonIcon />
      </InputWrapper>
      <InputWrapper>
        <Input placeholder="성(예: 진)" />
        <PersonIcon />
      </InputWrapper>
      <InputWrapper>
        <Input type="password" placeholder="비밀번호" />
        <OpenedEyeIcon />
      </InputWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 568px;
  height: 614px;
  padding: 32px;
  background-color: #fff;
  z-index: 11;

  .mordal-close-x-icon {
    display: block;
    margin: 0 0 40px auto;
    cursor: pointer;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;

  svg {
    position: absolute;
    top: 16px;
    right: 11px;
  }
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 46px;
  padding: 0 44px 0 11px;
  border: 1px solid ${palette.gray_eb};
  border-radius: 4px;
  font-size: 16px;
  outline: none;

  ::placeholder {
    color: ${palette.gray_76};
  }
`;

export default SignUpModal;

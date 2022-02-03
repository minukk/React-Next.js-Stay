import React, { useState } from 'react';
import styled from 'styled-components';
import CloseXIcon from '../../public/static/svg/modal/modal_colose_x_icon.svg';
import MailIcon from '../../public/static/svg/auth/mail.svg';
import PersonIcon from '../../public/static/svg/auth/person.svg';
import OpenedEyeIcon from '../../public/static/svg/auth/opened_eye.svg';
import ClosedEyeIcon from '../../public/static/svg/auth/closed_eye.svg';
import Input from '../common/Input';
import { yearList, monthList, dayList } from '../../lib/staticData';
import Selector from '../common/Selector';
import palette from '../../styles/palette';
import Button from '../common/Button';
import { signupAPI } from '../../lib/api/auth';

interface BirthProps {
  birthYear?: string;
  birthMonth?: string;
  birthDay?: string;
}

const SignUpModal: React.FC = () => {
  const [hidePassword, setHidePassword] = useState(true);
  const [user, setUser] = useState({
    email: '',
    lastName: '',
    firstName: '',
    password: '',
  });
  const [birth, setBirth] = useState<BirthProps>({});

  const { email, lastName, firstName, password } = user;
  const { birthYear, birthMonth, birthDay } = birth;

  const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, email: event.target.value });
  };

  const onChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, lastName: event.target.value });
  };

  const onChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, firstName: event.target.value });
  };

  const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, password: event.target.value });
  };

  const onChangeBirthYear = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirth({ ...birth, birthYear: event.target.value });
  };

  const onChangeBirthMonth = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirth({ ...birth, birthMonth: event.target.value });
  };
  const onChangeBirthDay = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBirth({ ...birth, birthDay: event.target.value });
  };

  const toggleHidePassword = () => {
    setHidePassword((prevHide) => !prevHide);
  };

  const onSubmitSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const signUpBody = {
        email,
        lastName,
        firstName,
        password,
        birthday: new Date(
          `${birthYear}-${birthMonth!.replace('월', '')}-${birthDay}`
        ).toISOString(),
      };
      await signupAPI(signUpBody);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Container onSubmit={onSubmitSignUp}>
      <CloseXIcon className="mordal-close-x-icon" />
      <InputWrapper>
        <Input
          type="email"
          placeholder="이메일 주소"
          name="email"
          icon={<MailIcon />}
          value={user.email}
          onChange={onChangeEmail}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="이름(예: 민욱)"
          icon={<PersonIcon />}
          value={user.lastName}
          onChange={onChangeLastName}
        />
      </InputWrapper>
      <InputWrapper>
        <Input
          placeholder="성(예: 진)"
          icon={<PersonIcon />}
          value={user.firstName}
          onChange={onChangeFirstName}
        />
      </InputWrapper>
      <InputWrapper className="sign-up-password-input-wrapper">
        <Input
          type={hidePassword ? 'password' : 'text'}
          placeholder="비밀번호"
          icon={
            hidePassword ? (
              <ClosedEyeIcon onClick={toggleHidePassword} />
            ) : (
              <OpenedEyeIcon onClick={toggleHidePassword} />
            )
          }
          value={user.password}
          onChange={onChangePassword}
        />
      </InputWrapper>
      <BirthdayLabel>생일</BirthdayLabel>
      <BirthdayInfo>
        만 18세 이상의 성인만 회원으로 가입할 수 있습니다. 생일은 다른
        에어비앤비 이용자에게 공개되지 않습니다.
      </BirthdayInfo>
      <BirthdaySelector>
        <BirthdayMonth>
          <Selector
            options={monthList}
            disabledOptions={['월']}
            defaultValue="월"
            value={birth.birthMonth}
            onChange={onChangeBirthMonth}
          />
        </BirthdayMonth>
        <BirthdayDay>
          <Selector
            options={dayList}
            disabledOptions={['일']}
            defaultValue="일"
            value={birth.birthDay}
            onChange={onChangeBirthDay}
          />
        </BirthdayDay>
        <BirthdayYear>
          <Selector
            options={yearList}
            disabledOptions={['년']}
            defaultValue="년"
            value={birth.birthYear}
            onChange={onChangeBirthYear}
          />
        </BirthdayYear>
      </BirthdaySelector>
      <ButtonWrapper>
        <Button type="submit">가입하기</Button>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.form`
  width: 568px;
  height: 614px;
  padding: 32px;
  border-radius: 20px;
  background-color: #fff;
  z-index: 11;

  .mordal-close-x-icon {
    display: block;
    margin: 0 0 40px auto;
    cursor: pointer;
  }

  .sign-up-password-input-wrapper {
    svg {
      cursor: pointer;
    }
  }
`;

const InputWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const BirthdayLabel = styled.p`
  margin: 16px 0 8px;
  font-size: 16px;
  font-weight: 600;
`;

const BirthdayInfo = styled.p`
  margin-bottom: 16px;
  color: ${palette.charcoal};
`;

const BirthdaySelector = styled.div`
  display: flex;
  margin-bottom: 80px;
`;

const BirthdayYear = styled.div`
  width: 33.3333%;
`;
const BirthdayMonth = styled.div`
  flex-grow: 1;
  margin-right: 16px;
`;
const BirthdayDay = styled.div`
  width: 25%;
  margin-right: 16px;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid ${palette.gray_eb};
`;

export default SignUpModal;

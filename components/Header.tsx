import React, { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import palette from '../styles/palette';
import AirbnbLogoIcon from '../public/static/svg/logo/logo.svg';
import AirbnbLogoTextIcon from '../public/static/svg/logo/logo_text.svg';
import SignUpModal from './auth/SignUpModal';
import useModal from '../hooks/useModal';

const Header: React.FC = () => {
  const { openModal, ModalPortal } = useModal();

  return (
    <Container>
      <Link href="/">
        <HeaderWrapper>
          <AirbnbLogoIcon className="header-logo" />
          <AirbnbLogoTextIcon />
        </HeaderWrapper>
      </Link>
      <HeaderAuth>
        <HeaderSignup type="button" onClick={openModal}>
          회원가입
        </HeaderSignup>
        <HeaderSignin type="button">로그인</HeaderSignin>
      </HeaderAuth>
      <ModalPortal>
        <SignUpModal />
      </ModalPortal>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  padding: 0 80px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 12px;
  z-index: 10;
`;

const HeaderWrapper = styled.a`
  display: flex;
  align-items: center;

  .header-logo {
    margin-right: 6px;
  }
`;

const HeaderAuth = styled.div``;

const HeaderSignup = styled.button`
  height: 42px;
  margin-right: 8px;
  padding: 0 16px;
  border: 0;
  border-radius: 21px;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: ${palette.gray_f7};
  }
`;

const HeaderSignin = styled.button`
  height: 42px;
  padding: 0 16px;
  border: 0;
  border-radius: 21px;
  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.18);
  cursor: pointer;
  outline: none;

  &:hover {
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.12);
  }
`;

export default Header;

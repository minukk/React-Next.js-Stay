import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element;
}

const Input: React.FC<IProps> = ({ icon, ...props }) => {
  return (
    <Container iconExist={!!icon}>
      <input {...props} />
      <div className="input-icon-wrapper">{icon}</div>
    </Container>
  );
};

const Container = styled.div<{ iconExist: boolean }>`
  input {
    position: relative;
    width: 90%;
    height: 46px;
    padding: ${({ iconExist }) => (iconExist ? '0 44px 0 11px' : '0 11px')};
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    font-size: 16px;

    ::placeholder {
      color: ${palette.gray_76};
    }

    &:focus {
      border-color: ${palette.dark_cyan} !important;
    }
  }

  .input-icon-wrapper {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 11px;
    height: 46px;
  }
`;

export default Input;

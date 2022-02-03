import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

interface IProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: string[];
  disabledOptions?: string[];
  value?: string;
}

const Selector: React.FC<IProps> = ({
  options = [],
  disabledOptions = [],
  ...props
}) => {
  console.log(options);
  return (
    <Container>
      <select {...props}>
        {disabledOptions.map((option, index) => {
          return (
            <option key={index} value={option} disabled>
              {option}
            </option>
          );
        })}
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 46px;

  select {
    width: 100%;
    height: 100%;
    padding: 0 11px;
    border: 1px solid ${palette.gray_eb};
    border-radius: 4px;
    background-position: right 11px center;
    background-color: #fff;
    background-image: url('/static/svg/common/selector/selector_down_arrow.svg');
    background-repeat: no-repeat;
    font-size: 16px;
    outline: none;
    -webkit-appearance: none;

    &:focus {
      border-color: ${palette.dark_cyan};
    }
  }
`;

export default Selector;

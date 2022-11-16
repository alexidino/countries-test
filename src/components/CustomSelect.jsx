import styled from "styled-components";

import Select from 'react-select';

export const CustomSelect = styled(Select).attrs({
  styles: {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'var(--colors-ui-base)',
      color: 'var(--colors-text)',
      borderRadius: 'var(--radii)',
      padding: '0.25rem',
      border: 'none',
      boxShadow: 'var(--shadow)',
      height: '50px',
    }),
    option: (provided, state) => ({
      ...provided,
      cursor: 'pointer',
      color: 'var(--colors-text)',
      backgroundColor: state.isSelected ? 'var(--colors-bg) ' : 'var(--colors-ui-base)',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'var(--colors-text)',
    })
  }
})`
  width: 200px;
  border-radius: var(--radii);
  border: none;
  font-family: var(--family);

  & > * {
    // box-shadow: var(--shadow);
  }

  & input {
    padding-left: 2rem !important;
  }

  & * {
    color: var(--colors-text);
  }

  & > div[id] {
    background-color: var(--colors-ui-base);
  }
`;
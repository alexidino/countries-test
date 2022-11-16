import { Search } from "./Search";
import { CustomSelect } from "./CustomSelect";
import { useState, useEffect } from 'react';

import styled from "styled-components";

const options = [
  {value: 'Africa', label: 'Africa'},
  {value: 'America', label: 'America'},
  {value: 'Asia', label: 'Asia'},
  {value: 'Europe', label: 'Europe'},
  {value: 'Oceania', label: 'Oceania'},
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Controls = ({handleSearch}) => {

  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  useEffect(() => {
    handleSearch(search, region)
  }, [search, region])

  return(
    <Wrapper>
      <Search search={search} setSearch={setSearch}/>
      <CustomSelect 
        options={options}
        placeholder= 'Filter by region'
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
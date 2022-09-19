import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import SearchResult from '../components/SearchResult'
import FilterData from '../components/FilterData'

const SearchPage = () => {
  const {organicresult, loading} = useSelector((state) => state.organicResult)
  console.log(organicresult)
  return (
    <Main>
        <FilterData />
          <SearchResult organicresult={organicresult} />
    </Main>
  )
}

export default SearchPage

const Main = styled.div`
width: 100%;
height: auto;


`

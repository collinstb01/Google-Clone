import React from 'react'
import styled from 'styled-components'
import SearchInput from './SearchInput'
import UserIcons from './UserIcons'
import logo from "../asset/logo.png"

const SearchPageTop = () => {
  return (
    <Main>
        <div className='search-top flex'>
          <div className="left-search">
           <div className='logo'>
           <img src={logo} />
           </div>
            <SearchInput />
          </div>
          <div>
            <UserIcons />
          </div>
        </div>
    </Main>
  )
}

export default SearchPageTop

const Main = styled.div`
.search-top {
  margin-block: 20px;
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  .logo {
    width: 140px;
    display: flex;
    justify-content: flex-end;
    img {
    width: 100px;
    height: auto;
    object-fit: contain;
  }
  }
  .left-search {
    display: flex;
    justify-content: space-evenly;
  }

  .input-search {
    flex: 1;
  }

}
`
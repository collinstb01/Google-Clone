import React from 'react'
import SearchInput from '../components/SearchInput'
import img from "../asset/logo.png"
import styled from 'styled-components'
import UserIcons from '../components/UserIcons'

const Home = () => {
  return (
    <Main className='flex h-screen items-center flex-col'>
        <div className='item flex'>
           <UserIcons />
        </div>
        <img src={img} className="w-72 mt-20 mb-" />
        <SearchInput />
    </Main>
  )
}

export default Home

const Main = styled.div`



`
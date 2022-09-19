import React from 'react'
import {BsDice6} from "react-icons/bs"
import styled from 'styled-components'

const UserIcons = () => {
  return (
    <Main>
         <span>Gmail</span>
            <span>Images</span>
            <span><BsDice6 /></span>
            <span className='avatar'>E</span>
    </Main>
  )
}

export default UserIcons

const Main = styled.div`
display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    padding-top: 10px;
    padding-right: 20px;
    span {
        padding: 0px 12px;
        cursor: pointer;
    }

.avatar {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: whitesmoke;
    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    
}
`
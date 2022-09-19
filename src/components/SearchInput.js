import React, { useState } from 'react'
import styled from 'styled-components'
import {AiOutlineSearch} from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { getSearch } from '../features/SearchSlice/SearchSlice'
import { useNavigate } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
// import LinearDeterminate from './HorizontalLoader'

const SearchInput = () => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {organicresult, loading} = useSelector((state) => state.organicResult)
    console.log(organicresult)

    const handle = (e) => {
        setInput(e.target.value)
    }
    const search = () => {
        dispatch(getSearch(input))
        navigate("/search")
    }
    console.log(input)
  return (
    <Main className='justify-center'>
        {
            loading && <Spinner />
        }
       <div className="search">
       <input value={input} placeholder='Search on google' onChange={handle} className="input" />
       <AiOutlineSearch className="search__icon" onClick={search} />
       </div>
       <div>
       </div>
    </Main>
  )
}

export default SearchInput

const Main = styled.div`
    display: flex;
    width: 100%;
    position: relative;

.input {
    border: 1px solid whitesmoke;
    border-radius: 25px;
    padding: 13px 80px;
    width: 100%;
    outline: none;
    @media (max-width: 800px) {
        width: 100%;
    }
}
.search {
    position: relative;
}
.search:hover {
    box-shadow: -1px 0px 4px 1px #5b4f4f69;
    border-radius: 25px;
}
.search__icon {
    position: absolute;
    top: 20px;
    left: 20px;
    width: 25px;
    color: blue;
    cursor: pointer;
}
`
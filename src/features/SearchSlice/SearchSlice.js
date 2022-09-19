import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
  

export const getSearch = createAsyncThunk(
    "search/results",
    async (input) => {
        try {
        const response = await  axios.request(
            {
                method: 'GET',
                url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${input}`,
                headers: {
                  'X-User-Agent': 'desktop',
                  'X-Proxy-Location': 'EU',
                  'X-RapidAPI-Key': 'ad62b006b4msh211066947d0908ap18ff60jsnbea90cb57766',
                  'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
                }
              }
        ) 
        
        console.log(response.data)
        return response.data
        } catch (error) {
            console.log(error)
        }
    }
)

const SearchSlice = createSlice({
    name: "search",
    initialState: {
        organicresult: [],
        organicimages: [],
        loading: true
    },
    reducers: {

    },
    extraReducers: {
        [getSearch.pending]: (state, action) => {
            return {...state}
        },
        [getSearch.fulfilled]: (state, action) => {
            return {...state, loading: false,organicresult: action.payload }
        },
        [getSearch.rejected]: (state, action) => {
            return {...state}
        }
    }
})

export default SearchSlice.reducer
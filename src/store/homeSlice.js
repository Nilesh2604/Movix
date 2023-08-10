import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:0,
}

export const counterSlice=createSlice({
    name:'home',
    initialState:{
        url:{},
        genres:{}
    },
    reducers:{
        getApiConfiguration:(state,action)=>{
            state.url=action.payload

        },
        getGenres:(state,action)=>{
            state.genres=action.payload

        }

       
    }
})

export const {getApiConfiguration,getGenres}=counterSlice.actions

export default counterSlice.reducer
import { createSlice, configureStore } from '@reduxjs/toolkit';

const storedataSlice = createSlice({
    name: storedata,
    initialState: {
        bearer: ""
    },
    reducers: {
        storeBearer: (state, action) => {
            state.bearer = action.payload;
        },
        resetBearer: state => {
            state.bearer = "";
        }
    }
})
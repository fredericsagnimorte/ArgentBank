import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
    initialState: {
        bearer: "",
        userFirstName: "",
        userLastName: "",
        userName: ""
    },
    reducers: {
        setBearer: (state, action) => {
            state.bearer = action.payload;
        },
        resetBearer: state => {
            state.bearer = "";
        },
        setUserFirstName: (state, action) => {
            state.userFirstName = action.payload;
        },
        resetUserFistName: state => {
            state.userFirsName = "";
        },
        setUserLastName: (state, action) => {
            state.userLastName = action.payload;
        },
        resetUserLastName: state => {
            state.userLastName = "";
        }, setUserName: (state, action) => {
            state.userName = action.payload;
        },
        resetUserName: state => {
            state.userName = "";
        },
    }
})

const store = configureStore({
    reducer: {
        user: userSlice.reducer
    }
});

export const { setBearer, resetBearer, setUserFirstName, resetUserFirstName, setUserLastName, resetUserLastName, setUserName, resetUserName } = userSlice.actions;
export default store;
import { createSlice, configureStore } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: "user",
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

const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});

export const { storeBearer, resetBearer } = userSlice.actions;
export default store;
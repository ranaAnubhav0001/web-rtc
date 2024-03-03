import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    name: "",
    avtaar: "",
};


export const activateSlice = createSlice({
    name: 'activate',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setAvtaar: (state, action) => {
            state.avtaar = action.payload;
        },
    },
});

export const { setName, setAvtaar } = activateSlice.actions;

export default activateSlice.reducer;
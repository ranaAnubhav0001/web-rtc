import { createSlice } from '@reduxjs/toolkit'


const onNextSlice = createSlice({
    name: "next",
    initialState: {
        step: 1,
    },
    reducers: {
        setStep (state) {
            state.step += 1;
        },
    }
})

export const { setStep } = onNextSlice.actions;
export default onNextSlice.reducer;
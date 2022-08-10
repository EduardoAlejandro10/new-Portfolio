import { createSlice } from '@reduxjs/toolkit';

export const navMenuSlice = createSlice({
    name: 'navMenu',
    initialState: false,
    reducers: {
        toggleNavMenu: state => {
            return !state;
        }

    }
})

export const { toggleNavMenu } = navMenuSlice.actions;

export default navMenuSlice.reducer;

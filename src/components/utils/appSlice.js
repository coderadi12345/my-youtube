import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        isMenuOpen: true,

    },
    reducers: {
        toggleMenu: (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu: (state) =>{
            state.isMenuOpen = false
        }
    }, 
})

export const {toggleMenu} = appSlice.actions
export const {closeMenu} = appSlice.actions
export default appSlice.reducer
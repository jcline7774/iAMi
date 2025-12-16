import { createSlice } from "@reduxjs/toolkit"


var themeSlice = createSlice({
    name: 'theme',
    initialState: { isDarkMode: true },
    reducers: {
        toggleDarkMode(state) {
            state.isDarkMode = !state.isDarkMode;
        }
    }
})


export const themeAction =  themeSlice.actions;
export default themeSlice.reducer;

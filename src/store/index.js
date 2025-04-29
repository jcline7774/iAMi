import {configureStore} from "@reduxjs/toolkit"
import themeReducer  from "./theme-slice"



const store = configureStore({
    reducer: {
        theme: themeReducer, // ✅ Make sure this key is "theme"
      },
    });
    
export default store;
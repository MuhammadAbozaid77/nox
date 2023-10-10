import { apiDataSlice_Reducers } from "./apiDataSlice";
import { authSlice_Reducers } from "./authSlice";

const { configureStore } = require("@reduxjs/toolkit");



let noxeStore = configureStore({
    reducer : {
        authSlice_In_Store : authSlice_Reducers ,
        apiDataSlice_In_Store : apiDataSlice_Reducers ,
    }
})

export default noxeStore ;
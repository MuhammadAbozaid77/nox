import jwtDecode from "jwt-decode";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

let auth_Initial_State = {
    registerSuccess: false,
    errorMessage : "",
    userToken: "",
    login_ErrorMessage : "",
    userData : [],
    gotoLogin :false
} ;

export let sendRegisterData = createAsyncThunk("auth slice/sendRegisterData" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI;
    let option = {
        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(argu),
    }
    try {
        let data = await  fetch("https://ecommerce.routemisr.com/api/v1/auth/signup" , option) ;
        let data2 = await data.json();
        return data2 ;
    } catch (error) {
        return rejectWithValue(error);
    }
});
export let sendLoginData = createAsyncThunk("auth slice/sendLoginData" , async (argu , thunkAPI)=>{
    let {rejectWithValue} = thunkAPI;
    let option = {
        method: "POST",
        headers: { "Content-Type": "application/json",},
        body: JSON.stringify(argu),
    }
    try {
        let data = await  fetch("https://ecommerce.routemisr.com/api/v1/auth/signin" , option) ;
        let data2 = await data.json();
        return data2 ;
    } catch (error) {
        return rejectWithValue(error);
    }
});

let authSlice = createSlice({
    name : "auth slice" ,
    initialState : auth_Initial_State ,
    reducers : {
        setRegisterSuccess : (state , action)=>{
            state.registerSuccess = false ;
            state.errorMessage = "" ;
        },
        setLoginSuccess : (state , action)=>{
            state.login_ErrorMessage = "" ;
        },
        LogOutFun : (state , action)=>{
            state.userToken = "" ;
            localStorage.removeItem("UserToken");
            state.gotoLogin = true;
        },
        saveUserData : (state , action)=>{
            state.userToken = action.payload;
            let unCodedToken = action.payload;
            let DecodedToken = jwtDecode(unCodedToken);
            state.userData = DecodedToken ;
        }
    },
    extraReducers : {
        /*-------------------------------------------------  Registiration  ------------------------------*/ 
                [sendRegisterData.fulfilled] : (state , action)=>{
                    if(action.payload.message === "success"){
                        state.registerSuccess  = true ;
                    }
                    else{
                        state.errorMessage = action.payload.message;
                    }
                    
                },
        /*--------------------------------------------------  Login  -----------------------------*/ 
                [sendLoginData.fulfilled] : (state , action)=>{
                    if(action.payload.message === "success"){
                        state.userToken  = action.payload.token ;
                        state.gotoLogin = false;

                    }
                    else{
                        console.log(action.payload)
                        state.login_ErrorMessage  = action.payload.message ;
                    }
                    
                },
            }
});


export let authSlice_Reducers = authSlice.reducer ;
export let {setRegisterSuccess , setLoginSuccess , LogOutFun , saveUserData} = authSlice.actions ; 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState{
    user:object | null;
    token:string | null;
    isAuthenticated:boolean;
    loading:boolean;
    error:string |null
    
}

const initialState:AuthState={
    user:null,
    token:null,
    isAuthenticated:false,
    loading:false,
    error:null
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    //actions
    reducers:{
        loginRequest(state){
            state.loading=true
        },
        loginSuccess(state,action:PayloadAction<{user:{email:string;password:string},token:string}>){
            state.user=action.payload.user;
            state.token=action.payload.token
            state.isAuthenticated=true
            state.loading=false
        },
        loginFailure(state,action:PayloadAction<string> ){
            state.error=action.payload
            state.loading=false
        },
        logout(state){
            state.user=null,
            state.token=null,
            state.isAuthenticated=false
        }
    }
})

export const {loginRequest,loginSuccess,loginFailure,logout}=authSlice.actions
export default authSlice.reducer
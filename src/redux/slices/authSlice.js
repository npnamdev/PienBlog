import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
    "users/login",
    async (data) => {
        return data;
    }
)

export const logout = createAsyncThunk(
    "users/logout",
    async () => {
        return;
    }
);

const initialState = {
    account: {
        accessToken: "",
        refreshToken: "",
        username: "",
        image: ""
    },
    isAuthenticated: false,
    isLoading: false,
    isError: false
}

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.account = {
                    accessToken: action?.payload?.accessToken,
                    refreshToken: action?.payload?.refreshToken,
                    username: action?.payload?.username,
                    image: action?.payload?.image
                };
                state.isAuthenticated = true;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.account = {
                    accessToken: "",
                    refreshToken: "",
                    username: "",
                    image: ""
                };
                state.isAuthenticated = false;
                state.isLoading = false;
                state.isError = false;
                window.localStorage.removeItem("persist:root");
            })
            .addCase(logout.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })
    }
})

export default authSlice.reducer;
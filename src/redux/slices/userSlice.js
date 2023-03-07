import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUser, filterUserByRole, searchUserByEmail } from '../../services/apiService';


export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async () => {
        const res = await getAllUser();

        return res.data;

    }
)


export const filterUsersByRole = createAsyncThunk(
    "users/filterUsersByRole",
    async (data) => {
        const res = await filterUserByRole(data.role);

        return res.data;
    }
)


export const searchUsersByEmail = createAsyncThunk(
    "users/searchUsersByEmail",
    async (data) => {
        const res = await searchUserByEmail(data.email);

        return res.data;
    }
)


const initialState = {
    listUsers: [],
    isLoading: false,
    isError: false
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllUsers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

            .addCase(filterUsersByRole.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(filterUsersByRole.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(filterUsersByRole.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

            .addCase(searchUsersByEmail.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(searchUsersByEmail.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(searchUsersByEmail.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            })

    }
})


export default userSlice.reducer
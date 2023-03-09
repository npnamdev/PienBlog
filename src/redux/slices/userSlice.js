import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllUser } from '../../services/apiService';


export const fetchAllUsers = createAsyncThunk(
    "users/fetchAllUsers",
    async (data) => {
        const res = await getAllUser(data.page, data.limit, data.type, data.email, data.role);

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
    }
})


export default userSlice.reducer
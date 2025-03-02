import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: false, // Indicates whether the user is logged in
    userData: null, // Stores the user data when logged in
};

const authSlice = createSlice({
    name: 'auth', // Name of the slice
    initialState, // Initial state
    reducers: {
        // Action to handle user login
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },

        // Action to handle user logout
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

// Export the actions for use in components
export const { login, logout } = authSlice.actions;

// Export the reducer for use in the Redux store
export default authSlice.reducer;
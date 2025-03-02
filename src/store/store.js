import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

// Create the Redux store
const store = configureStore({
    reducer: {
        auth: authSlice, // Add the auth slice to the store
    },
});

// Export the store for use in the application
export default store;
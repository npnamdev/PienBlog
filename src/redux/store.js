// import { configureStore } from '@reduxjs/toolkit';
// import authSlice from './slices/authSlice';
// import userSlice from './slices/userSlice';

// export const store = configureStore({
//     reducer: {
//         user: userSlice,
//         auth: authSlice
//     },
// })






import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import userSlice from './slices/userSlice';

import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux";
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage
};

const reducers = combineReducers({
    user: userSlice,
    auth: authSlice
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
})


let persistor = persistStore(store)

export { store, persistor };
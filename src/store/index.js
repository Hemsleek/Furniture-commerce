import { configureStore } from "@reduxjs/toolkit";
import furnitureReducer from "./furnitureReducer";
import storage from 'redux-persist/lib/storage'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'




const config = {
    key: 'furniture',
    storage
}

const persistedReducer = persistReducer(config, furnitureReducer)

const store = configureStore({
    reducer: {
        furnitureReducer: persistedReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
})

export default store
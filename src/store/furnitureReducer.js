import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: []
}

const furnitureSlice = createSlice({
    name: 'furniture',
    initialState,
    reducers: {
        addToCart(state, action) {

        }
    }
})


export const { addToCart } = furnitureSlice.actions
export default furnitureSlice.reducer;
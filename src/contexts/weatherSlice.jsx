import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        cityName: 'ambala'
    },
    reducers: {
        searchWeather(state, action) {
            const city = action.payload;
            state.cityName = city;
        }
    }
})

export default weatherSlice;
export const weatherActions = weatherSlice.actions;
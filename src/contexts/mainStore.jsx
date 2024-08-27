import { configureStore } from '@reduxjs/toolkit';

import EmployeeSlice from './EmployeeSlice';
import weatherSlice from './weatherSlice';
import productsSlice from './productsSlice';
import billsSlice from './BillsSlice';

const store = configureStore({
    reducer: {
        employee: EmployeeSlice.reducer,
        weather: weatherSlice.reducer,
        products: productsSlice.reducer,
        bills: billsSlice.reducer
    }
});

export default store;
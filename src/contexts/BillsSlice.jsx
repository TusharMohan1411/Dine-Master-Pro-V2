import { createSlice, current } from "@reduxjs/toolkit";
import ALL_BILLS from "../data/billData";

const billsSlice = createSlice({
    name: 'bills',
    initialState: {
        allBills: ALL_BILLS,
        activeBills: ALL_BILLS,
        currentItemsInBill: [],
    },
    reducers: {
        addItemInCurrentBill(state, action) {
            const newItem = action.payload
            const existingItem = state.currentItemsInBill.find(item => item.item === newItem.item);

            if (!existingItem) {
                state.currentItemsInBill.push(newItem)
            } else {
                existingItem.quantity += newItem.quantity
                existingItem.amount = existingItem.amount + newItem.amount;
            }
        },
        removeItemFromCurrentBill(state, action) {
            const itemIndex = action.payload;
            const finalItems = state.currentItemsInBill.filter((_, index) =>
                index !== itemIndex);
            state.currentItemsInBill = finalItems
        },
        submitBill(state, action) {
            const newBill = action.payload;
            state.allBills = [...state.allBills, newBill]
            state.currentItemsInBill = []
            state.activeBills = [...state.activeBills, newBill]

        },
        cancelBills(state, action) {
            const selectedBill = action.payload;
            const updatedBills = state.allBills.map(bill => {
                if (bill.billNo === selectedBill.billNo) {
                    return { ...bill, cancelled: true };
                }
                return bill;
            });
            state.allBills = updatedBills;

            const activeBills = state.allBills.filter((bill) => bill.cancelled == false);
            state.activeBills = activeBills
        }
    }
})

export default billsSlice;

export const billsAction = billsSlice.actions;
import { createSlice } from '@reduxjs/toolkit'
import EMPLOYEES_DATA from '../data/employees';

const EmployeeSlice = createSlice({
    name: 'employee',
    initialState: {
        employees: EMPLOYEES_DATA,
        filteredEmployees: EMPLOYEES_DATA,
        totalEmployees: EMPLOYEES_DATA.length
    },
    reducers: {
        deleteEmployee(state, action) {
            const id = action.payload;
            if (window.confirm('Do you want to delete this Employee?')) {
                let empArray = [...state.filteredEmployees];
                empArray = empArray.filter(empl => empl.id !== id)
                state.filteredEmployees = [...empArray];
                state.totalEmployees--;
            }
        },
        addNewEmployee(state, action) {
            const newEmployee = action.payload
            state.filteredEmployees = [...state.filteredEmployees, newEmployee]
            state.totalEmployees++;
        },
        editEmployee(state, action) {
            const updatedEmployee = action.payload;
            const updatedEmployeesList = state.filteredEmployees.map(emp => emp.id === updatedEmployee.id ? updatedEmployee : emp)
            state.filteredEmployees = [...updatedEmployeesList]
        }
    },

})

export default EmployeeSlice;

export const employeeActions = EmployeeSlice.actions;
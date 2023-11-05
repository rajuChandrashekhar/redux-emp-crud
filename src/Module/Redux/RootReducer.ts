import {combineReducers} from '@reduxjs/toolkit';
import * as EmployeeReducer from "../Redux/Employee/Employee.reducer";

const RootReducer: any = combineReducers({
[EmployeeReducer.employeeFeatureKey]: EmployeeReducer.employeeSlice.reducer
});

export default RootReducer;
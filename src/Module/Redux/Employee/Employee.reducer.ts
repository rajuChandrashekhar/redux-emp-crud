import { createSlice } from "@reduxjs/toolkit";
import { Iemp } from "../../model/Employee";
import * as EmployeesAction from "../Employee/Employee.action"

export const employeeFeatureKey ="employeeFeature";

export interface InitialState{
    employees:Iemp[],
    employee:Iemp 
};

const initialState:InitialState={
    employees: [] as Iemp [],
    employee: {} as Iemp 
};

export const employeeSlice =createSlice({
name:"employeeSlice",
initialState:initialState,

reducers:{},
extraReducers:(builder)=>{

    // getAllEmployee
    builder.addCase(EmployeesAction.getAllEmployeeAction.fulfilled ,(state,action)=>{
        state.employees=action.payload
    })
     builder.addCase(EmployeesAction.getEmpByIdAction.fulfilled,(state,action)=>{
        state.employee=action.payload
     })
     builder.addCase(EmployeesAction.createEmpAction.fulfilled,(state,action)=>{
        state.employee= action.payload
     })

     builder.addCase(EmployeesAction.updateEmpAction.fulfilled, (state,action)=>{
        state.employee =action.payload
     })

    //  builder.addCase(EmployeesAction.deleteEmpAction.fulfilled,(state)=>{
    //     state.employee= {} as Iemp
    //  })

}

})












import { createAsyncThunk } from "@reduxjs/toolkit";
import { Iemp } from "../../model/Employee";
import { EmployeeService } from "../../service/EmployeeService";

// getAllEmployee 
export const getAllEmployeeAction:any = createAsyncThunk ('Employee/getAllEmployeeAction',
async(payload:{},{rejectWithValue}):Promise<Iemp[] | any> =>{
    try{
   let res = await EmployeeService.getAllemp()
   return res.data
    }catch(error:any){
      if(!error.res){
      throw error
      }
      return rejectWithValue(error.res.data)
    }
});

// getOneEmployee 
export const getEmpByIdAction:any = createAsyncThunk('Employee/getEmpByIdAction',
async(payload:{id:string},{rejectWithValue}):Promise<Iemp | any> =>{
    try{
        const {id}= payload

   let res = await EmployeeService.getEmpById(id)
   return res.data
    }catch(error:any){
      if(!error.res){
      throw error
      }
      return rejectWithValue(error.res.data)
    }
}
)

// createEmployee 
export const createEmpAction:any = createAsyncThunk('Employee/createEmpAction',
async(payload:{body:Iemp},{rejectWithValue}):Promise<Iemp[] | any> =>{
    try{
        const {body}= payload
   let res = await EmployeeService.createEmp(body)
   return res.data
    }catch(error:any){
      if(!error.res){
      throw error
      }
      return rejectWithValue(error.res.data)
    }
}
)

// updateEmployeeAction 
export const updateEmpAction:any = createAsyncThunk('Employee/updateEmpAction',
async(payload:{id:string,body:Iemp},{rejectWithValue}):Promise<Iemp | any> =>{
    try{
        const {id,body}= payload

   let res = await EmployeeService.updateEmp(body,id)
   return res.data
    }catch(error:any){
      if(!error.res){
      throw error
      }
      return rejectWithValue(error.res.data)
    }
}
);

export const deleteEmpAction:any = createAsyncThunk('Employee/updateEmpAction',
async(payload:{id:string},{rejectWithValue}):Promise<Iemp | any> =>{
    try{
        const {id}= payload
   let res = await EmployeeService.deleteEmp(id)
   return res.data
    }catch(error:any){
      if(!error.res){
      throw error
      }
      return rejectWithValue(error.res.data)
    }
}
);



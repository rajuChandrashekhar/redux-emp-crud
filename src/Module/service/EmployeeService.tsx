
import axios from "axios"
import { Iemp } from "../model/Employee";
 
 export class EmployeeService{



    private static serverUrl:string ="http://3.110.193.86:4444/employee";


    public static getAllemp():Promise<{data:Iemp[]}>{
        const data = `${this.serverUrl}/employees`
        return axios.get(data)
    };


    public static getEmpById(id:string):Promise<{data:Iemp}>{
    
        const data= `${this.serverUrl}/id/${id}`
    
        return axios.get(data)
    };



    public static createEmp(body:Iemp):Promise<{data:Iemp[]}>{
    
        const data=`${this.serverUrl}/`
    
        return axios.post(data,body)
    };


    
     public static updateEmp=(body:Iemp,id:string):Promise<{data:Iemp}>=>{
    
        const data =`${this.serverUrl}/id/${id}`
    
        return axios.put(data,body)
     };


     public static deleteEmp=(id:string):Promise<{data:{}}>=>{
    
        const data =`${this.serverUrl}/id/${id}`
    
        return axios.delete(data)
     }
};
 

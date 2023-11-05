import React, { useState } from 'react'
import * as EmployeeReducer from "../Redux/Employee/Employee.reducer"
import * as EmployeeAction  from "../Redux/Employee/Employee.action";
import { useNavigate } from 'react-router-dom';
import { Iemp } from '../model/Employee';
import { AppDispatch, RootState } from '../Redux/Store';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



const Createemployee:React.FC = () => {

    const navigate= useNavigate()

    const   dispatch:AppDispatch =useDispatch()

    const employeeReduxState:EmployeeReducer.InitialState =useSelector((state:RootState)=>{
        return state[EmployeeReducer.employeeFeatureKey]
    })

     const [emp,setEmp]=useState<Iemp>({
        firstName:"",
        lastName:"",
        emailId:"",
        id:""
     })

     const changeInput =(event:React.ChangeEvent<HTMLInputElement>)=>{
        setEmp({
            ...emp,
            [event.target.name]:event.target.value
        })
     };

    const submitData=(event:React.FormEvent<HTMLFormElement>)=>{
     event.preventDefault();

     dispatch(EmployeeAction.createEmpAction({body:emp})).then((res:any)=>{
        if(res && !res.error){
            navigate('/create')
        }
     })
    }


    return (
    <>

     <h1> Createemployee</h1>

     <div className="container-fluid bg-success mb-5 mt-2">
          <div className="container">
          <div className="row">
            <div className="col-lg-6">
               <div className="card p-4 bg-light mt-3 mb-4">
              <div className="card-header bg-light">
                <span className='text-info h4 fst-italic mb-2'>Create Employee</span>
              </div>
               <form onSubmit={(e)=>submitData(e)}>
                   <div className="mb-2">
                   <label className='form-label'>FirstName*</label>
                   <input
                   name='firstName'
                   value={emp.firstName}
                   onChange={(e)=>changeInput(e)}
                   type="text"  className='form-control' />
                   </div>

                   <div className="mb-2">
                   <label className='form-label'>LastName*</label>
                   <input 
                   name='lastName'
                   value={emp.lastName}
                   onChange={(e)=>changeInput(e)}
                   type="text" className='form-control' />
                   </div>
                   
                   <div className="mb-2">
                   <label className='form-label'>Emailid *</label>
                   <input
                   name='emailId'
                   value={emp.emailId}
                   onChange={(e)=>changeInput(e)}
                   type="text" className='form-control' />
                   </div>
                   
                <div className='mb-2'>
                 <button type='submit' className='btn btn-primary'>Submit</button>
                 <button type='reset' className='btn btn-secondary'>Reset</button>
                  </div>
              </form>
               </div>
            </div>

            <div className='col-6'>
              <img className='mt-3 mb-4' height={400} width={650} src="https://blog.vantagecircle.com/content/images/size/w1000/2023/09/Benefits-of-Employee-Engagement--Featured-image.png" alt="" />
            </div>
          </div>
  
          </div>
                 </div>
        
     
    </>
  )
};

export default Createemployee;

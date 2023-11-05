import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../Redux/Store'
import * as EmployeeReducer from "../Redux/Employee/Employee.reducer"
import * as EmployeeAction  from "../Redux/Employee/Employee.action";
import { Iemp } from '../model/Employee';
import { useNavigate, useParams } from 'react-router-dom';

interface IState{
    updateemp:Iemp
}
const Updateemployee:React.FC = () => {

  
    const   dispatch:AppDispatch =useDispatch()

    const employeeReduxState:EmployeeReducer.InitialState =useSelector((state:RootState)=>{
        return state[EmployeeReducer.employeeFeatureKey]
    });

    const {employee} =employeeReduxState
    const navigate= useNavigate()
    const {id}= useParams()

    const [employe,setEmploye]=useState<Iemp>({
        firstName:"",
        lastName:"",
        emailId:"",
        id:""
     });

     const changeInputValue =(event:React.ChangeEvent<HTMLInputElement>):void=>{
          setEmploye({              
        ...employe,
        [event.target.name]:event?.target.value
          })
    };

    useEffect(()=>{
         if(id){
            dataFromServer(id)
         }
    },[id])
     
    useEffect(()=>{
       if(employee && Object.keys(employee).length > 0){
      setEmploye({
        ...employe,
        firstName:employee.firstName,
        lastName:employee.lastName,
        emailId:employee.emailId
      })
       }
    },[employee])


     const dataFromServer =(id:string)=>{
        dispatch(EmployeeAction.getEmpByIdAction({id:id}))
     };


     const updateEmployeeForm=(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault()
        dispatch(EmployeeAction.updateEmpAction({id:id,body:employe})).then((res:any)=>{
       if(res && !res.error){
        navigate('/data')
       }
        })
     };

return (
<>

    <div className="container-fluid bg-light">
        {JSON.stringify(employe)}
    <div className="row">
      <div className="col">
        <p className="h3 mx-5 fst-italic text-success pt-4 pb-3"> Update employee</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta impedit unde vero 
          dolor totam optio inventore, eligendi omnis nam voluptates numquam tenetur voluptas. 
          Eius, dignissimos recusandae? Facilis, id cupiditate. Recusandae.
          Lorem reprehenderit saepe eligendi consectetur tempora expedita voluptates
          consectetur tempora expedita voluptates reprehenderit saepe eligendi consectetur 
          perspiciatis magni, sit harum accusamus!
        </p>
      </div>
    </div>
  </div>

   <div className="container-fluid bg-success mb-5 mt-2">
    <div className="container">
    <div className="row">
      <div className="col-lg-6">
         <div className="card p-4 bg-light mt-3 mb-4">
        <div className="card-header bg-light">
          <span className='text-info h4 fst-italic mb-2'>Update employee</span>
        </div>
         <form onSubmit={(e)=>updateEmployeeForm(e)}  > 
             <div className="mb-2">
             <label className='form-label'>FirstName*</label>
             <input
             name='firstName'
              value={employe.firstName}
              onChange={(e)=>changeInputValue(e)}
             type="text"  className='form-control' />
             </div>

             <div className="mb-2">
             <label className='form-label'>LastName*</label>
             <input 
             name='lastName'
             value={employe.lastName}
             onChange={(e)=>changeInputValue(e)}
             type="text" className='form-control' />
             </div>

             <div className="mb-2">
             <label className='form-label'>Emailid *</label>
             <input
             name='emailId'
            value={employe.emailId}
            onChange={(e)=>changeInputValue(e)}
             type="text" className='form-control' />
             </div>
             
          <div className='mb-2'>
           <button type='submit' value={'Update'}  className='btn btn-primary'>Submit</button>
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
}

export default Updateemployee;


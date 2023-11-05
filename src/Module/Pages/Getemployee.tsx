import React, { useEffect } from "react";
import { AppDispatch, RootState } from "../Redux/Store";
import { useDispatch } from "react-redux";
import * as EmployeeReducer from "../Redux/Employee/Employee.reducer";
import { useSelector } from "react-redux";
import * as EmployeeAction from "../Redux/Employee/Employee.action"
import { Link } from "react-router-dom";

const Getemployee: React.FC = () => {

    const dispatch: AppDispatch = useDispatch();
    const employeeReduxState: EmployeeReducer.InitialState = useSelector((state: RootState) => {
        return state[EmployeeReducer.employeeFeatureKey]
    })

    useEffect(() => {
        getAllEmpData()
    }, []);

    const getAllEmpData = () => {
        dispatch(EmployeeAction.getAllEmployeeAction())
    };

    const deleteData =(id:string) =>{
     if(id){
        dispatch(EmployeeAction.deleteEmpAction({id:id})).then((res:any)=>{
            if(res && !res.error){
                getAllEmpData()
            }
        })
     }
    };


    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <h1 className="h3 text-secondary">All Employee Data</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Quod cumque deserunt voluptatum quis in nemo exercitationem quam
                            obcaecati? Dolorem voluptates libero tempora eligendi blanditiis?
                            Error obcaecati, optio animi dicta pariatur velit aut quo nobis
                            eum consequatur amet quod sint non..
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-striped ">
                            <thead>
                                <tr>
                                    <th>Sr no</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email Id</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employeeReduxState.employees.map((emp, index) => {
                                        return (
                                            <tr key={emp.id}>
                                                <td>{emp.id}</td>
                                                <td>{emp.firstName}</td>
                                                <td>{emp.lastName}</td>
                                                <td>{emp.emailId}</td>

                                                <td>
                                                    <Link to={`/update/${emp.id}`} className="btn btn-success mx-2">Update </Link>
                                                    <button onClick={(id)=>deleteData(emp.id)} className="btn btn-danger">Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
};
export default Getemployee;

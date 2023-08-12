import React from "react";
import { useNavigate } from "react-router-dom";
import { SideBar } from '../components/sidebar';
import { useData } from "../context/data-context";
import { TextCard } from "../components/card";
import "./department.css";

export const DepartmentPage = () =>{
    const navigate=useNavigate()
    const {Data,Departments,setDepartment} = useData();



    const dashboardData = [{name:"",qty:Departments[0]},{name:"",qty:Departments[1]},{name:"",qty:Departments[2]}]


   return(
       <div className="main-container">
           <div className="sidebar">{<SideBar/>}</div>
           <div className="main-section ">
               {dashboardData.map((dash)=>{return(
                   <div className="card1"onClick={()=>{setDepartment(dash.qty);navigate('/products')}}><TextCard prop = {dash} /></div>
                   
               )})}
               

           </div>
       </div>
   )   
}
import React from "react";
import { SideBar } from '../components/sidebar';
import { useData } from "../context/data-context";
import { TextCard } from "../components/card";

import "./homepage.css";

export const HomePage = () =>{
     const {Data} = useData();
     const totalStock = Data.reduce((totalStock,curr)=>totalStock+curr.stock,0)
     const delivered = Data.reduce((delivered,curr)=>delivered+curr.delivered,0)
     const lowStock = Data.filter((prod)=>prod.stock<=10).length;
    //  reduce((lowStock,curr)=>lowStock+curr.stock,0)



     const dashboardData = [{name:"Total Stock",qty:totalStock},{name:"Total Delivered",qty:delivered},{name:"Low Stock Items",qty:lowStock}]


    return(
        <div className="main-container">
            <div className="sidebar">{<SideBar/>}</div>
            <div className="main-section ">
                {dashboardData.map((dash)=>{return(
                    <TextCard prop = {dash}/>
                )})}
                

            </div>
        </div>
    )
}
//total stock..delivered...lowstockitem
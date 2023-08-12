import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import { useData } from "../context/data-context";

import Button from "react-bootstrap/Button";
import "./singleproductpage.css";

export const SingleProductPage = () =>{
    const navigate = useNavigate();
    const {prodId} = useParams();
    const {Data} = useData();

    const product = Data.find((prod)=>prod.id == prodId);

    return(
        <div className="main-container">
           <div className="sidebar">{<SideBar/>}</div>
           <div className="main-section5 ">
            <h1 className="product-name">{product?.name}</h1>
            <img
                        className="photo1"
                        src={`${product?.imageUrl}`}
                      />
            <h3>Price:{product?.price}</h3>
            <h3>Stock:{product?.stock}</h3>
            <h3>Supplier:{product?.supplier}</h3>
            <h3>Department:{product?.department}</h3>
            <h3>SKU:{product?.sku}</h3>
            <h3>Delivered:{product?.delivered}</h3>
            <h3>Description:{product?.description}</h3>
            <Button variant="primary" onClick={()=>navigate('/products')}>Back</Button>


        
           </div>
       </div>
    )
}
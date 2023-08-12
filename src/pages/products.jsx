import { React, useState } from "react";
import { useData } from "../context/data-context";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "./products.css";

export const ProductsPage = () => {

  const navigate = useNavigate();
  const { department, Data, Departments, setDepartment, sortBy, dispatch } =
    useData();

//   const [finalData, setFinalData] = useState(Data);

//   const DepartmentClickHandler = () => {
//     setFinalData(
//       Data.filter((prod) => {
//         return department != "All Departments"
//           ? prod.department == department
//           : 1 == 1;
//       })
//     );
//   };
  let finalData = Data.filter((prod) => {
    return department != "All Departments"
      ? prod.department == department
      : 1 == 1;
  })
  let finalDataD = finalData;
  
//   let finalDataS = sortBy.length === 0? finalDataD: sortBy == "name"? RatingFilter.sort(function (a, b) {
//           return a.name - b.newPrice;
//         })
//       : RatingFilter.sort(function (a, b) {
//           return b.newPrice - a.newPrice;
//         });

        let finalDataS;
         switch(sortBy){
            case "": finalDataS=finalDataD; break;
            case "name": finalDataS=finalDataD.sort(function (a, b) {
                if (a.name < b.name) {
                    return -1;
                  }
                  if (a.name > b.name) {
                    return 1;
                  }
                  return 0;
              });break;
              case "price": finalDataS=finalDataD.sort(function (a, b) {
                return a.price - b.price;
              });break;
              case "stock": finalDataS=finalDataD.sort(function (a, b) {
                return a.stock - b.stock;
                
              });break;
        }
        


  return (
    <div className="main-container">
      <div className="sidebar">{<SideBar />}</div>
      <div className="main-section">
        <div className="topBar">
          <h1 className="prodname">Products</h1>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {department}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setDepartment("All Departments");
                //   DepartmentClickHandler();
                }}
              >
                All Departments
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setDepartment("Kitchen");
                //   DepartmentClickHandler();
                }}
              >
                Kitchen
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setDepartment("Clothing");
                //   DepartmentClickHandler();
                }}
              >
                Clothing
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setDepartment("Toys");
                //   DepartmentClickHandler();
                }}
              >
                Toys
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div>
            <input value="One" type="checkbox" />
            <span> Low Stock </span>
          </div>
          <div className="sortBy">
            <label >Sort By  :</label>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              {sortBy}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  dispatch({
                    type: "Sort",
                    payload: "name",
                  });
                }}
              >
                Name
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  dispatch({
                    type: "Sort",
                    payload: "price",
                  });
                }}
              >
                Price
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  dispatch({
                    type: "Sort",
                    payload: "stock",
                  });
                }}
              >
                Stock
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          </div>
          
          <Button variant="primary">Add New Product</Button>
        </div>

        <div className="product-listing">
          <Table responsive>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Supplier</th>
              </tr>
            </thead>
            <tbody>
              {finalDataS.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>
                      <img
                        className="photo"
                        src={`${product.imageUrl}`}
                        onClick={() => {
                          navigate(`/products/${product.id}`);
                        }}
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.price}</td>
                    <td>{product.stock}</td>
                    <td>{product.supplier}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

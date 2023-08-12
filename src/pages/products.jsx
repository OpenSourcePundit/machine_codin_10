import { React, useState } from "react";
import { useData } from "../context/data-context";
import { useNavigate } from "react-router-dom";
import { SideBar } from "../components/sidebar";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Modal from 'react-bootstrap/Modal';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import "./products.css";

export const ProductsPage = () => {
    let value="";

  const navigate = useNavigate();
  const { department, Data, Departments, setDepartment, sortBy, dispatch } =
    useData();
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    const addProduct = () => {setShowModal(false)}
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
              case "none": finalDataS=finalDataD;break;
        }
        


  return (
    <div className="main-container">
      <div className="sidebar">{<SideBar />}</div>
      <div className="main-sectionp">
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
              <Dropdown.Item
                onClick={() => {
                  dispatch({
                    type: "Sort",
                    payload: "none",
                  });
                }}
              >
                None
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          </div>
          
          <Button variant="primary" onClick={handleShow}>Add New Product</Button>
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
                    <td style={{cursor:'pointer'}} onClick={() => {
                          navigate(`/products/${product.id}`);
                        }}>{product.name}</td>
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

        {/* Add New Product Modal Modal  */}
        <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>


        <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-1"
        >
          {Departments.map((dep)=><Dropdown.Item onClick={()=>setDepartment(dep)} >{dep}</Dropdown.Item>)}
        </DropdownButton>{console.log("val aa rhe ",value)}
        <Form.Control aria-label="dropdown button" type = 'text' disabled placeholder={`${department}`}  />
        
      </InputGroup>
      {/* <Form.Control  type = 'text' placeholder={`${department}`}  /> */}

      <Form.Label htmlFor="name">Name</Form.Label>
      <Form.Control
        type="text"
        id="name"
      />
      <Form.Label htmlFor="Description">Description</Form.Label>
      <Form.Control
        type="text"
        id="Description"
      />
      <Form.Label htmlFor="Price">Price</Form.Label>
      <Form.Control
        type="number"
        id="Price"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Label htmlFor="Stock">Stock</Form.Label>
      <Form.Control
        type="number"
        id="Stock"
      />
      <Form.Label htmlFor="SKU">SKU</Form.Label>
      <Form.Control
        type="number"
        id="SKU"
      />
      <Form.Label htmlFor="Supplier">Supplier</Form.Label>
      <Form.Control
        type="text"
        id="Supplier"
      />
      <Form.Label htmlFor="Delivered">Delivered</Form.Label>
      <Form.Control
        placeholder="0"
        type="number"
        id="Delivered"
        disabled
      />
      <Form.Label htmlFor="ImageURL">ImageURL</Form.Label>
      <Form.Control
        type="text"
        id="ImageURL"
      />


            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProduct}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </div>
  );
};

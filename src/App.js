import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import { SideBar } from './components/sidebar';
import { HomePage } from './pages/homepage';
import { DepartmentPage } from './pages/department';
import { ProductsPage } from './pages/products';
import { SingleProductPage } from './pages/singleproductpage';


function App() {
  // Departments Page
  // Product List Page
  // Product Management (Data persistence is mandatory)
  return (
    <div className="App">
      {/* <SideBar/> */}

      <Routes>
          <Route path="/" element={<HomePage/>}  />
          <Route path="/department" element={ <DepartmentPage/>}  />
          <Route path ="/products" element={<ProductsPage/>} />
          {/* <Route path ="/:category/:vidid" element={<VideoPage/>} /> */}
          <Route path ="/products/:prodId" element={<SingleProductPage/>} />
         


        </Routes>

    
    </div>
  );
}

export default App;

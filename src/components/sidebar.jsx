import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarSubMenu,
    CDBSidebarFooter,
  } from 'cdbreact';
  import { useNavigate } from 'react-router-dom';

  export const SideBar = () => {
    const navigate = useNavigate();
    return (
        <CDBSidebar>
          <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>Portal</CDBSidebarHeader>
          <CDBSidebarContent>
            <CDBSidebarMenu>
              <CDBSidebarMenuItem icon="th-large"  onClick={()=>navigate('/')}>Dashboard</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="sticky-note" onClick={()=>navigate('/department')}>Departments</CDBSidebarMenuItem>
              <CDBSidebarMenuItem icon="credit-card" iconType="solid" onClick={()=>navigate('/products')}>
                Products
              </CDBSidebarMenuItem>
            </CDBSidebarMenu>
          </CDBSidebarContent>
  
          {/* <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div
              className="sidebar-btn-wrapper"
              style={{padding: '20px 5px'}}
            >
              Sidebar Footer
            </div>
          </CDBSidebarFooter> */}
        </CDBSidebar>
    );
  };
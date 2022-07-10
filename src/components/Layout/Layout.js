import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';



function Layout() {
  return (
    <div >           
        <Suspense >
          <Outlet />
        </Suspense>          
    </div>
  );
}

export default Layout;
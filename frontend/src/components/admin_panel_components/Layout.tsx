// import React from 'react'

import Navbar from "./admin_navbar/Navbar";
import Sidbar from "./admin_sidebar/Sidbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navbar />
      <Sidbar />
      {children}
    </div>
  );
};

export default Layout;

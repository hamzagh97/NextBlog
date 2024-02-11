import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface layout {
  children: ReactNode;
}

const Layout = (props: layout) => {
  return (
    <div className="relative min-h-screen bg-gray-100 pb-72">
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;

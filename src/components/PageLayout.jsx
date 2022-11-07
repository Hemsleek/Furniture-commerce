import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const PageLayout = ({ children, navBg }) => {
  return (
    <div className="flex flex-col overflow-hidden w-screen h-screen">
      <Navbar bg={navBg} />

      <main className="flex-grow overflow-auto">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default PageLayout;

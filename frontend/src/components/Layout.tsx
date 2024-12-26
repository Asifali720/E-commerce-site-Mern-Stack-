import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import ChatBot from "./chat_bot/ChatBot";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-full relative">
      <Navbar />
      {children}
      <ChatBot />
      <Footer />
    </div>
  );
};

export default Layout;

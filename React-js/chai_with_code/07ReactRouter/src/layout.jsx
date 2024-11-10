import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/footer";
import { Outlet } from "react-router-dom";

function Layout(){
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}
export default Layout;
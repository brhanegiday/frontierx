import React from "react";
import Footer from "./Footer";
import Header from "./Header";
function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen  bg-gradient-to-tr from-[#181919] to-[#2e233e]">
        {props.children}
      </main>
      <Footer />
    </React.Fragment>
  );
}
export default Layout;

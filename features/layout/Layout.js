import React from "react";
import Footer from "./Footer";
import Header from "./Header";
function Layout(props) {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-black-haze-500">{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}

export default Layout;

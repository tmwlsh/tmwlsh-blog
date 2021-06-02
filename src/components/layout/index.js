import * as React from "react";
import { Header } from "../header";
import { Footer } from "../footer";

import "../../sass/basics.scss";

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export { Layout };

import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import StickyFooter from "../components/StickyFooter";
import Main from "../components/Main";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Main }  path="/" exact />
           <Route component = { StickyFooter }  path="/StickFooter" />
       </BrowserRouter>
   )
}

export default Routes;
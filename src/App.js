import * as React from "react";

//import Tabela from './components/Tabela'
import Login from './components/Login'

export default function App() {
  return (
   <Login/>
  );
}

/*
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
            <Route path="/">
              <Login />
            </Route>
            <Route path="/users">
              <Tabela />
            </Route>
      </Routes>
    </Router>
  );
}
 */
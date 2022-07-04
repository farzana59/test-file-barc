import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminForm from "./components/Admin/AdminForm";

function App() {
  const [title, updateTitle] = useState(null);
  
  return (
    <Router>
      <div className="App">
        <Header title={title} />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route path="/" exact={true}>
              <Dashboard />
            </Route>
            <Route path="/admin/dashboard">
              <AdminDashboard
                
                updateTitle={updateTitle}
              />
            </Route>
            <Route path="/admin/form">
              <AdminForm
                
                updateTitle={updateTitle}
              />
            </Route>
           </Switch> 
         </div>   
            
      </div>
    </Router>
  );
}

export default App;

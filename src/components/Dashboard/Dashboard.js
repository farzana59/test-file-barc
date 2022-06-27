import React from "react";
import "./Dashboard.css";
import { withRouter } from "react-router-dom";
import { Card } from 'react-bootstrap';

function Dashboard(props) {
    const redirectToAdmin = () => {
        props.history.push('/admin/dashboard'); 
        props.updateTitle('Admin dashboard');
    }

    const redirectToVisitor = () => {
        props.history.push('/register'); 
        props.updateTitle('Register');
    }

  return (
    <div className="App">
        <Card style={{ color: "#000", width: 400, height: 400 }}>
          
          <Card.Body>
            <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary btn-lg btn-block" type="button"  onClick={() => redirectToAdmin()}>
                Admin
              </button>
              <button class="btn btn-primary btn-lg btn-block" type="button"  onClick={() => redirectToVisitor()}>
                Visitor
              </button>
            </div>

          </Card.Body>
        </Card>
    </div>
  );
}

export default withRouter(Dashboard);

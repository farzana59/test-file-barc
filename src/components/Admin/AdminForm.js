import React, { useState } from "react";
import { withRouter } from "react-router-dom";

function AdminForm(props) {
  const [state, setState] = useState({
    email: "",
    password: "",
    successMessage: null,
  });
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmitClick = (e) => {
    redirectToDashboard();
  };
  const redirectToDashboard = () => {
    props.updateTitle("Admin dashboard");
    props.history.push("/admin/dashboard");
  };

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="exampleInputEmail1">Title </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter Title"
          />
        </div>

        <div className="form-group text-left">
          <div class="custom-file">
            <input
              type="file"
              class="custom-file-input"
              id="inputGroupFile01"
            />
            <label class="custom-file-label" for="inputGroupFile01">
              Choose file
            </label>
          </div>
        </div>

        <div className="form-group text-left">
          <div class="input-group-prepend">
            <span class="input-group-text">Open in a new tab?</span>
            <div class="input-group-text">
              <input
                type="checkbox"
                aria-label="Checkbox for following text input"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-dark"
          onClick={handleSubmitClick}
        >
          Submit
        </button>
      </form>
      <div
        className="alert alert-success mt-2"
        style={{ display: state.successMessage ? "block" : "none" }}
        role="alert"
      >
        {state.successMessage}
      </div>
      <div className="registerMessage">
        <span className="loginText" onClick={() => redirectToDashboard()}>
          Go back
        </span>
      </div>
    </div>
  );
}

export default withRouter(AdminForm);

import {
  CheckCircleFillIcon,
  PencilIcon,
  TrashIcon,
  XCircleFillIcon,
} from "@primer/octicons-react";
import React from "react";
import { withRouter } from "react-router-dom";

function AdminDashboard(props) {
  const redirectToAdminForm = () => {
    props.history.push("/admin/form");
    props.updateTitle("Admin Form");
  };

  return (
    <>
      <div className="form-group">
        <button
          class="btn btn-primary btn-lg"
          type="button"
          onClick={() => redirectToAdminForm()}
        >
          Add File
        </button>
      </div>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Open in a new tab?</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>
              <CheckCircleFillIcon size={16} fill="green" />
            </td>
            <td>
              <TrashIcon size={24} fill="red" />{" "}
              <PencilIcon size={24} fill="blue" />
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>
              <XCircleFillIcon size={16} fill="red" />
            </td>
            <td>
              <TrashIcon size={24} fill="red" />{" "}
              <PencilIcon size={24} fill="blue" />
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>
              <XCircleFillIcon size={16} fill="red" />
            </td>
            <td>
              <TrashIcon size={24} fill="red" />{" "}
              <PencilIcon size={24} fill="blue" />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default withRouter(AdminDashboard);

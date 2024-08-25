import React from "react";
import { useNavigate } from "react-router-dom";

export default function viewUser() {

    

  return (
    <div className="p-5">
        <h1 className="text-center">View User</h1>
        <button className="btn btn-primary"
        onClick={() => {
        //   navigate("/save");
        }}
        >Add User</button>
      <table className="table w-100 p-4">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

import React from "react";
export default function viewUser(users: any) {

    // const [user, setUser] = React.useState({});

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
            <th scope="col">Given Name</th>
            <th scope="col">First</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
        {users.ussers.map((user: any) => {
                return (
                    <tr>
                        {/* <th scope="row">{user.id}</th> */}
                        <td>{user.given_name}</td>
                        <td>{user.middle_name}</td>
                        <td>{user.email}</td>
                        <td>{user.phone_number}</td>
                    </tr>
                );
            })}
        </tbody>
      </table>
    </div>
  );
}

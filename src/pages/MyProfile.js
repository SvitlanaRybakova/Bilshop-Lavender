import styles from "../styles/MyProfile.Module.css";


function MyProfile() {
  return (
    <div className="container">
      <div className="row">
        <p className="h6">My Profile</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="table-responsive">
            <table className="table table-bordered">
              <tbody>
                <tr>
                  <th>Name</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>address</th>
                  <td> </td>
                </tr>
                <tr>
                  <th>PHONE</th>
                  <td> </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="row">
        <p className="h6">My Orders</p>
      </div>
    </div>
  );
}

export default MyProfile;

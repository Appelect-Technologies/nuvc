import React from "react";
import { getJobsByEmail } from "../../utils/dataApi";
import { app } from "../../auth/auth";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const auth = getAuth(app);
  const [jobs, setJobs] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    async function fetchData() {
      const email = auth?.currentUser ? auth?.currentUser?.email : "";
      console.log("email---", email);
      const jobData = await getJobsByEmail("?email=" + email);

      setJobs(jobData ? jobData.jobs : []);
    }
    fetchData();
    return () => {
      setJobs([]);
    };
  }, []);
  return (
    <div className="container">
      <div class="card" style={{ margin: 20 }}>
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">SN</th>
                <th scope="col">Email</th>
                <th scope="col">Name</th>
                <th scope="col">Course</th>
                <th scope="col">OrderId</th>
                <th scope="col">PaymentId</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {jobs?.map((value, key) => {
                return (
                  <tr>
                    <th scope="row">{key}</th>
                    <td>{value.email}</td>
                    <td>{value.fname + " " + value.lname}</td>
                    <td>{value.jobId}</td>
                    <td>{}</td>
                    <td>{}</td>
                    <td>
                      {value.isPaid ? (
                        <button className="btn btn-success">Paid</button>
                      ) : (
                        <button
                          className="btn btn-info"
                          onClick={() => history.push("/apply/" + value.jobId)}
                        >
                          Pay
                        </button>
                      )}
                    </td>
                  </tr>
                );
              })}

              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { getJobsByEmail, getSubscriptions } from "../../utils/dataApi";
import { app } from "../../auth/auth";
import { getAuth } from "firebase/auth";
import { useHistory } from "react-router-dom";

function Dashboard() {
  const auth = getAuth(app);
  const [jobs, setJobs] = React.useState([]);
  const [values, setValues] = React.useState([]);
  const history = useHistory();

  const fetchSubscriptionsData = async () => {
    try {
      const email = auth.currentUser.email;
      const response = await getSubscriptions("?email=" + email);
      setValues(response.data);
    } catch (error) {
      // console.log("error occured", error);
      alert("Error occured while fetching purchases data");
    }
  };

  const fetchData = async () => {
    try {
      const email = auth.currentUser.email;
      const response = await getJobsByEmail("?email=" + email);
      const jobs = response.jobs.filter((job) => !job.isPaid);
      setJobs(jobs);
    } catch (error) {
      // console.log("error occured", error);
      alert("Error occured while fetching purchases data");
    }
  };

  React.useEffect(() => {
    fetchSubscriptionsData();
    fetchData();
  }, []);

  return (
    <div className="container-lg">
      <div class="card shadow-sm my-3">
        <div className="card-header">
          <h5>My Purchases</h5>
        </div>
        <div class="card-body">
          <div className="table-responsive">
            <table class="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">SN</th>
                  <th scope="col">Email</th>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col">Payment ID</th>
                  <th scope="col">Date</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(values) &&
                  values.map((value, key) => {
                    return (
                      <tr>
                        <th scope="row">{key + 1}</th>
                        <td>{value.email}</td>
                        <td>{value.subscriptions.title}</td>
                        <td>{value.type}</td>
                        <td>{value.subscriptions.paymentID}</td>
                        <td>{new Date(value.createdAt).toLocaleString()}</td>
                        <td>
                          <button className="btn btn-sm btn-success">
                            Paid
                          </button>
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

      <div class="card shadow-sm my-3">
        <div className="card-header">
          <h5>Pending</h5>
        </div>
        <div class="card-body">
          <div className="table-responsive">
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
                      <th scope="row">{key + 1}</th>
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
                            onClick={() =>
                              history.push("/apply/" + value.jobId)
                            }
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
    </div>
  );
}

export default Dashboard;

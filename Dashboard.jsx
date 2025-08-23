import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2 className="logo">Pobaly Kiosk</h2>
        <ul>
          <li className="active">Overview</li>
          <li> My Applications</li>
          <li>KYC Status</li>
          <li><Link to="/walletrecharge">Wallet</Link> </li>
          <li> Settings</li>
        </ul>
      </aside>

      {/* Main content */}
      <main className="main">
        <header className="header">
          <h1>Dashboard Overview</h1>
          <div className="user">Franchise Owner</div>
        </header>

        {/* Cards section */}
        <section className="cards">
          <div className="card">
            <h3>Wallet Balance</h3>
            <p>₹ 1,250</p>
          </div>
          <div className="card">
            <h3>Total RTOs Filed</h3>
            <p>56</p>
          </div>
          <div className="card">
            <h3>Pending Applications</h3>
            <p>8</p>
          </div>
          <div className="card">
            <h3>KYC Status</h3>
            <p>Verified</p>
          </div>
        </section>

        {/* Recent Activity */}
        <section className="activity">
          <h2>Recent Activity</h2>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Application ID</th>
                <th>Status</th>
                <th>Amount (₹)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>22 Aug 2025</td>
                <td>#RTI1234</td>
                <td> Approved</td>
                <td>50</td>
              </tr>
              <tr>
                <td>20 Aug 2025</td>
                <td>#RTI1221</td>
                <td> Pending</td>
                <td>50</td>
              </tr>
              <tr>
                <td>19 Aug 2025</td>
                <td>#RTI1218</td>
                <td> Rejected</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
}

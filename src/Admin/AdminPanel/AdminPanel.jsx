import React from 'react'
import './AdminPanel.css'
import { Link } from 'react-router-dom'


function AdminPanel() {
  return (
     <><div className="overlay"></div><aside className="sidebar">
          <div className="brand">
              Travel Admin
          </div>
          <ul className="nav-items">
              <li className="nav-item">
                  <Link to="/admin" className="nav-link">
                      <i className="fas fa-chart-line"></i>
                      Overview
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to='/user' className="nav-link">
                      <i className="fas fa-users"></i>
                      Manage Users
                  </Link>
              </li>
              <li className="nav-item">
              <Link to='/package' className="nav-link">
                      <i className="fas fa-box"></i>
                      Packages
                  </Link>
              </li>
              <li className="nav-item">
              <Link to='/payment' className="nav-link">
                      <i className="fas fa-credit-card"></i>
                      Payments
                  </Link>
              </li>
              <li className="nav-item">
                  <Link to="/feedback" className="nav-link">
                      <i className="fas fa-comments"></i>
                      Feedback
                  </Link>
              </li>
          </ul>
      </aside><main className="main-content">
              <div className="header">
                  <div className="menuToggle">
                      <i className="fas fa-bars"></i>
                  </div>
                  <div className="user-info">
                      <i className="fas fa-user"></i>
                      Admin
                  </div>
              </div>

              <div className="overview-cards">
                  <div className="card">
                      <div className="card-header">
                          <h3>Total Revenue</h3>
                          <div className="card-icon revenue">
                              <i className="fas fa-dollar-sign"></i>
                          </div>
                      </div>
                      <div className="card-body">
                          <h2>$45,250</h2>
                          <p>+12% from last month</p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h3>Active Users</h3>
                          <div className="card-icon users">
                              <i className="fas fa-users"></i>
                          </div>
                      </div>
                      <div className="card-body">
                          <h2>1,250</h2>
                          <p>+5% from last month</p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h3>Total Packages</h3>
                          <div className="card-icon packages">
                              <i className="fas fa-box"></i>
                          </div>
                      </div>
                      <div className="card-body">
                          <h2>85</h2>
                          <p>+3 new packages</p>
                      </div>
                  </div>
                  <div className="card">
                      <div className="card-header">
                          <h3>Feedback</h3>
                          <div className="card-icon feedback">
                              <i className="fas fa-comments"></i>
                          </div>
                      </div>
                      <div className="card-body">
                          <h2>4.8/5</h2>
                          <p>Based on 450 reviews</p>
                      </div>
                  </div>
              </div>

              <div className="table-container">
                  <h2>User Insights</h2>
                  <table className="table">
                      <thead>
                          <tr>
                              <th>Name</th>
                              <th>Package</th>
                              <th>Bookings</th>
                              <th>Total Spend</th>
                              <th>Last Active</th>
                              <th>Status</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td data-label="Name">John Doe</td>
                              <td data-label="Package">Bali Adventure</td>
                              <td data-label="Bookings">3</td>
                              <td data-label="Total Spend">$4,500</td>
                              <td data-label="Last Active">2 days ago</td>
                              <td data-label="Status"><span className="status active">Active</span></td>
                          </tr>
                          <tr>
                              <td data-label="Name">Jane Smith</td>
                              <td data-label="Package">Paris Explorer</td>
                              <td data-label="Bookings">2</td>
                              <td data-label="Total Spend">$3,200</td>
                              <td data-label="Last Active">1 week ago</td>
                              <td data-label="Status"><span className="status inactive">Inactive</span></td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </main></>

  )
}

export default AdminPanel
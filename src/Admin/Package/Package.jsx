import React from 'react'
import './Package.css'
import { Link } from 'react-router-dom'


function Package() {
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
                  <Link to='/feedback' className="nav-link">
                      <i className="fas fa-comments"></i>
                      Feedback
                  </Link>
              </li>
          </ul>
      </aside><main className="main-content">
              <div className="header">
                  <div className="menu-toggle">
                      <i className="fas fa-bars"></i>
                  </div>
                  <div className="user-info">
                      <i className="fas fa-user"></i>
                      Admin
                  </div>
                  <button className="create-button">Create Package</button>
              </div>

              <div className="container">
                  <div className="search-section">
                      <input type="text" className="search-bar" placeholder="Search packages..."/>
                      </div>
                  <div className="package-list">
                      <table>
                          <thead>
                              <tr>
                                  <th>Package ID</th>
                                  <th>Package Name</th>
                                  <th>Duration</th>
                                  <th>Price</th>
                                  <th>Average Rating</th>
                                  <th>Total Ratings</th>
                                  <th>Created Date</th>
                                  <th>Start Date</th>
                                  <th>End Date</th>
                                  <th>Review</th>
                                  <th>Status</th>
                                  <th>Actions</th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr>
                                  <td>001</td>
                                  <td>Luxury Beach Package</td>
                                  <td>7 Days</td>
                                  <td>$2,500</td>
                                  <td>4.8</td>
                                  <td>120</td>
                                  <td>2025-01-01</td>
                                  <td>2025-06-01</td>
                                  <td>2025-06-07</td>
                                  <td>Amazing experience!</td>
                                  <td>Active</td>
                                  <td>
                                      <div className="action-buttons">
                                          <button className="edit-button">Edit</button>
                                          <button className="delete-button">Delete</button>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>002</td>
                                  <td>Mountain Adventure</td>
                                  <td>5 Days</td>
                                  <td>$1,800</td>
                                  <td>4.5</td>
                                  <td>95</td>
                                  <td>2025-01-10</td>
                                  <td>2025-07-01</td>
                                  <td>2025-07-05</td>
                                  <td>Challenging but rewarding!</td>
                                  <td>Active</td>
                                  <td>
                                      <div className="action-buttons">
                                          <button className="edit-button">Edit</button>
                                          <button className="delete-button">Delete</button>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </main><form className="create-form" method="post" action="./packages.html" enctype="multipart/form-data">
              <div className="form-grid">
                  <div className="form-group">
                      <label>Package Name</label>
                      <input type="text" name="package_name" required />
                      </div>
                  <div className="form-group">
                      <label>Package Description</label>
                      <textarea name="package_description" rows="4"></textarea>
                  </div>
                  <div className="form-group">
                      <label>Package Image</label>
                      <input type="file" name="package_image" accept="image/*" />
                      </div>
                  <div className="form-group">
                      <label>Duration</label>
                      <input type="text" name="duration" placeholder="e.g., 7 Days" />
                      </div>
                  <div className="form-group">
                      <label>Price</label>
                      <input type="number" name="price" min="0" step="0.01" />
                      </div>
                  <div className="form-group">
                      <label>Discount (%)</label>
                      <input type="number" name="discount" min="0" max="100" />
                      </div>
                  <div className="form-group">
                      <label>Package Start Date</label>
                      <input type="date" name="start_date" />
                      </div>
                  <div className="form-group">
                      <label>Package End Date</label>
                      <input type="date" name="end_date" />
                      </div>
                  <div className="form-group">
                      <label>Status</label>
                      <select name="status">
                          <option value="active">Active</option>
                          <option value="inactive">Inactive</option>
                          <option value="pending">Pending</option>
                      </select>
                  </div>
                  <div className="form-actions">
                      <button type="button" className="btn btn-secondary">Cancel</button>
                      <button type="submit" className="btn btn-primary">Create Package</button>
                  </div>
              </div>
          </form></>


  )
}

export default Package
import React from 'react';

function searchForm(){

    return (
        <React.Fragment>
        <div className="row">
            <div className="col-md-12">
              <h5>Book Flights, Hotels and Holiday Packages</h5>
              <ul className="selc-flight-options">
                <li>
                  <a href="/#" className="btn btn-outline-primary btn-sm">ONE WAY</a>
                </li>
                <li>
                  <a href="/#" className="btn btn-outline-primary btn-sm">ROUND TRIP</a>
                </li>
                <li>
                  <a href="/#" className="btn btn-outline-primary btn-sm">MULTI-CITY</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="booking-form">
            <div className="form-header">
            </div>
            <form>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" type="text" />
                    <span className="form-label">Flying from</span>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input className="form-control" type="text" />
                    <span className="form-label">Flying to</span>
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6">
              <div className="form-group">
              <input className="form-control" type="date" />
              <span className="form-label">Check In</span>
              </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" type="date" />
                  <span className="form-label">Check Out</span>
                </div>
              </div>
              </div>
              <div className="row">
              <div className="col-md-4">
              <div className="form-group input-not-empty">
              <select className="form-control">
              <option>Economy class</option>
              <option>Business class</option>
              <option>First class</option>
              </select>
              <span className="select-arrow"></span>
              <span className="form-label">Travel class</span>
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group input-not-empty">
              <select className="form-control">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              </select>
              <span className="select-arrow"></span>
              <span className="form-label">Adults</span>
              </div>
              </div>
              <div className="col-md-4">
              <div className="form-group input-not-empty">
              <select className="form-control">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              </select>
              <span className="select-arrow"></span>
              <span className="form-label">Children</span>
              </div>
              </div>
              </div>
              <div className="form-btn">
              <button className="submit-btn btn btn-primary float-right">Check availability</button>
              </div>
            </form>
          </div>
        </React.Fragment>
    )
}

export default searchForm;
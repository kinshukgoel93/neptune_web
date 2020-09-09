import React from 'react';
import './Viewboard.css';
import SearchForm from '../searchForm/SearchForm';
import PackagesList from '../packagesList/PackagesList';
import logo from '../../Assets/Images/logo.png';

function ViewBoard()  {
  return (
  <React.Fragment>
    <nav className="navbar navbar-expand-lg bg-white fixed-top topNav">
          <div className="container-fluid">
            <a className="navbar-brand logo" href="/"><img src={logo} alt="" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="float-right" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home</a>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
      
      <div className="container-fluid mt-5 pt-4">
        <div className="row">
          <div className="col col-md-4">
            <div className="fix-flight-form col-md-12">
              <SearchForm />
            </div>
          </div>
          <div className="col col-md-8 pl-5 pt-5">
            <PackagesList />
          </div>
        </div>
      </div>
  </React.Fragment>
);
}

export default ViewBoard;

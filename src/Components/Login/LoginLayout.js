import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Login from './Login';

export default function LoginLayout(props){
  return (
    <Grid container  className='user-sign-in-container'>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className='signin-left-container'>
        <Fragment>
            <div className='signin-image'>
              <img alt="" src={require('../../Assets/Images/pexels-photo-3183150 (1).png')}/>
            </div>
        </Fragment>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='signin-right-container'>
        <Login/>
      </Grid>
    </Grid>
  );
};
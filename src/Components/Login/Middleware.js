import React, { useEffect } from "react";
import {isLoginSuccessful} from '../../Redux/selectors';
import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

export default function Middleware(props) {
    const isloginSuccess = useSelector(isLoginSuccessful);
    const history = useHistory();

    
  useEffect(()=>{
    console.log("Middleware Check",isloginSuccess);
  
    if(isloginSuccess === true){
      history.push("/Viewboard");
    }else{
      history.push("/Login");   
    }
  })

  return(
      <div>
          <h4>...loading</h4>
      </div>
  )
}


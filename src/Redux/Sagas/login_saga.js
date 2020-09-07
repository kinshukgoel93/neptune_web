import { takeEvery,all,put } from "redux-saga/effects";
import {USER_LOGIN} from "../../Utils/valuetypes";
import {setLoginSuccessful} from '../Actions/loginActions';
const userData = require('../../Assets/data/UserData.json');


function* userLogin(params){
    console.log("First Check", params);
    try{
        var userCheck = userData.data.find(f =>
            f.emailId.toLowerCase() === params.payload.email.toLowerCase() &&
            f.password === params.payload.password
        );

       if(userCheck !== undefined){
        yield put(setLoginSuccessful());
       }
        
        
    }catch(e){
        console.log("Unable to fetch through Service", e.message);
    }
}

export function* waitForUserLoginCheck(){
    console.log("check")
    yield all([takeEvery(USER_LOGIN,userLogin)])
}
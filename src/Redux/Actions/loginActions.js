import { USER_LOGIN, USER_LOGIN_SUCCESSFULL } from '../../Utils/valuetypes'


export const userLoginDetails = (email,password) =>{
    const data = {
        email: email,
        password: password
    }

    console.log(data);
   return {
       type: USER_LOGIN,
       payload: data
    };
}


export const setLoginSuccessful = () =>{
return{
    type:USER_LOGIN_SUCCESSFULL,
    payload:true
}
}
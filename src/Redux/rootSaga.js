import { all , fork} from "redux-saga/effects";
import { waitForUserLoginCheck} from './Sagas/login_saga';


export default function* rootSaga(){
    yield all([fork(waitForUserLoginCheck)]);
};
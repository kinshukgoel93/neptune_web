import React, { useState, useEffect } from "react";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Typography,
  CardContent,
  Card,
  InputAdornment,
} from "@material-ui/core";
import { useDispatch , useSelector } from 'react-redux';
import {userLoginDetails} from '../../Redux/Actions/loginActions';
import AccountCircle from "@material-ui/icons/AccountCircle";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SendIcon from "@material-ui/icons/Send";
import {isLoginSuccessful} from '../../Redux/selectors';
import { useHistory } from "react-router-dom";
import "./Login.css";

export default function Login(props) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isloginSuccess = useSelector(isLoginSuccessful);


  useEffect(()=>{
    if(isloginSuccess === true){
      history.push("/Viewboard");
    }
  })


  const keyDownControl = e => {
    if (e.key === "Enter") {
      dispatch(userLoginDetails(email,password))
    }
  };


  return (
    <>
      <div className="login-content">
        <div className="sign-in">
          <Grid container justify="center" className="row">
            <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
              <div className="centered">
               
                <Typography component="h6" variant="h5">
                  Sign in with your Neptune Account
                </Typography>
              </div>
              <Card>
                <CardContent>
                  <form noValidate>
                    <TextField
                      // error={errors["email"] ? true : false}
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      onKeyDown={keyDownControl}
                      // helperText={errors["email"]}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <TextField
                      // error={errors["password"] ? true : false}
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      onKeyDown={keyDownControl}
                      // helperText={errors["password"]}
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">
                            <VpnKeyIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    {/* <p className={"error"}>{errors["signInFailed"]}</p> */}
                    <Button
                      onClick={() => dispatch(userLoginDetails(email,password))}
                      type="button"
                      fullWidth
                      variant="contained"
                      color="primary"
                      endIcon={<SendIcon></SendIcon>}
                    >
                      Sign In
                    </Button>
                    <Grid container className="links">
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                      <Grid item>
                        <Link href="#" variant="body2">
                          {"Don't have an account? Sign Up"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
}

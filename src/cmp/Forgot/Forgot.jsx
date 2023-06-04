//start import here
import {
    Grid,
    Stack,
    Button,
    Container,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    InputAdornment,
    IconButton,
    OutlinedInput,
    FormControl,
    InputLabel
  } from "@mui/material";

  import {
    useState,
    useEffect
  } from "react";

  import {
    requestForgot,
    changePassword
  } from "./Forgot.action";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useNavigate
} from "react-router-dom";

//import end here
// main component start here
const Forgot = ()=>{

  const dispatch = useDispatch();
  const {ForgotReducer} = useSelector(response=>response);

  const navigate = useNavigate();

  const [input,setInput] = useState({
    email : "",
    code : "",
    password : ""
  });

  const [error,setError] = useState({
    username:{
      state: false,
      message : ""
    },
    code:{
      state: false,
      message : ""
    }
  });

  const [verifyForm,setVerifyForm] = useState(false);


  //start handleInput , call in every textField at onChange
const handleInput = (e)=>{
const input = e.target;
const key = input.name;
const value = input.value;
return setInput((oldData)=>{
return {
  ...oldData,
  [key] : value
}
});
}
 //end handleInput , call in every textField at onChange



  //start checkUser func call in useEffect
  const checkUser = ()=>{
    if(ForgotReducer.success){
      return setVerifyForm(true);
    }

    if(ForgotReducer.userNotFound){
      return setError((oldData)=>{
return {
  ...oldData,
  state : true,
  message : "user does not exist"
}
      });
    }
  }
  //end checkUser func call in useEffect



  //start checkForNewPassword func call in useEffect
const checkForNewPassword = ()=>{
  if(ForgotReducer.passwordChanged){
    return navigate("/login");
      }
 if(ForgotReducer.invalidCode){
        return setError((oldData)=>{
        return {
          ...oldData,
          code : {
            state : true,
            message : "Invalid verification code"
          }
        }
        });
          }
}
//end checkForNewPassword func call in useEffect


//start useEffect hooks 
  useEffect(()=>{
    checkUser();
    checkForNewPassword();

  },[ForgotReducer]);
  //end useEffect hooks 



  //main design start
const design = (
    <>
    <Container>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <h1>One</h1>
        </Grid>
        <Grid item xs={12} sm={6}>
          <h1>Forgot password</h1>
{
  !verifyForm ?
          <form onSubmit={(e)=>dispatch(requestForgot(e))}>
            <Stack direction="column">
            <TextField 
            eror={error.username.state}
            helperText={error.username.message}
            name="email"
            label="Email id"
            variant="outlined"
            sx={{mb : 3}}
            onChange={handleInput}
            value={input.email}
            />
          <div>
          <Button type="submit" variant="contained" color="primary" sx={{py : "12px"}}>Forgot</Button>
          </div>
          </Stack>
          </form> :

          <form onSubmit={(e)=>dispatch(changePassword(e,input))}>
            <Stack direction="column">
            <TextField 
            error={error.code.state}
            helperText={error.code.message}
            name="code"
            label="Verication code"
            variant="outlined"
            sx={{mb : 3, mt :3}}
            type="number"
            onChange={handleInput}
            value={input.code}
            />

            <TextField 
            name="password"
            label="New password"
            variant="outlined"
            sx={{mb : 3, mt :3}}
            type="password"
            onChange={handleInput}
            value={input.password}
            />
          <div>
          <Button type="submit" variant="contained" color="primary" sx={{py : "12px"}}>submit</Button>
          </div>
          </Stack>
          </form>
}
        </Grid>
      </Grid>
    </Container>
    </>
);
return design;
}
export default Forgot;
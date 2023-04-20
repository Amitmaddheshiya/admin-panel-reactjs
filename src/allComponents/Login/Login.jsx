import {Grid,Button,Stack,TextField,Container,Checkbox,FormGroup,FormControlLabel } from "@mui/material";
import {Link,useNavigate} from "react-router-dom";

const Login = ()=>{
const navigate = useNavigate();

  //submit login 
  const login = (e)=>{
    e.preventDefault();
    navigate("/admin-panel");
  }

    const design = (
      <>
     <Container>
      <Grid container>

        <Grid item xs={12} sm={6}>
      <h1>login</h1>
        </Grid>

        <Grid item xs={12} sm={6}>
          <h1>login</h1>
          <form onSubmit={login}>
            <Stack direction="column" spacing={3}>
            <TextField label="Username" variant="outlined" />
            <TextField label="Passsword" variant="outlined" type="password" />

            <Stack direction="row" justifyContent="end">
              <a href="#">Forget password ?</a>
            </Stack>

            <Stack direction="row" justifyContent="space-between" alignItems="center">
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember me" />
            </FormGroup>
              <Button type="submit" variant="contained" color="secondary" sx={{xs:3,py:1}}>Login</Button>
            </Stack>

            <Link to="/">Create and account</Link>

            </Stack>
          </form>
        </Grid>

      </Grid>
     </Container>
      </>
      
    );
    return design;
  }
  export default Login; 
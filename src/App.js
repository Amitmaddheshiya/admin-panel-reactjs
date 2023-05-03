import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';
import Signup from "./cmp/Signup/Signup";
import Login from "./cmp/Login/Login";
import Admin from "./cmp/Admin/Admin";
import Dashboard from "./cmp/Admin/Dashboard/Dashboard";
import Notfound from "./cmp/Notfound/Notfound";
import AuthGuard from "./guard/AuthGuard";
import "@fontsource/poppins";

import {
ThemeProvider,
createTheme,
Typography
} from "@mui/material";

import { 
  deepPurple,
  teal,
  pink,
  deepOrange,
  lightBlue,
  cyan
 } from '@mui/material/colors';




const App = ()=>{
  //themeki det karne ki coding
  const theme = createTheme({
    palette: {
      primary: deepPurple,
      secondary: teal,
      error: pink,
      warning: deepOrange,
      success: cyan,
      info: lightBlue

    },
    Typography:{
      fontFamily:"Poppins"
    }
  });

  const design = (
    <>
    <ThemeProvider theme={theme}>
    <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />

          <Route element={<AuthGuard />}>
          <Route path="admin-panel" element={<Admin />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="*" element={<Notfound />} />
          </Route>
          </Route>
          
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </ThemeProvider>
      
    </>
  );
  return design;
}

export default App;

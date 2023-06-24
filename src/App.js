import storage from "./storage";
import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'material-icons/iconfont/material-icons.css';

import {
  ThemeProvider,
  createTheme,
  Paper
} from "@mui/material";

import {
  deepPurple,
  teal,
  pink,
  deepOrange,
  lightBlue,
  cyan
} from '@mui/material/colors';

import {
  useState
} from "react";

import Signup from "./cmp/Signup/Signup";
import Login from "./cmp/Login/Login";
import Forgot from "./cmp/Forgot/Forgot";
import Admin from "./cmp/Admin/Admin";
import Calendar from "./cmp/Admin/Calendar/Calendar";
import Notes from "./cmp/Admin/Notes/Notes";
import Modern from "./cmp/Admin/Dashboard/Modern/Modern";
import Notfound from "./cmp/Notfound/Notfound";
import AuthGuard from "./guard/AuthGuard";
import "@fontsource/poppins/500.css";

const App = ()=>{
   const [mode,setMode] = useState("light");
  storage.subscribe(()=>{
    const {AdminReducer} = storage.getState();
    AdminReducer.dark ? setMode("dark") : setMode("light")
  })
  const Theme = createTheme({
    palette: {
      mode: mode,
      primary: deepPurple,
      secondary: teal,
      error: pink,
      warning: deepOrange,
      success: cyan,
      info: lightBlue
    },
    typography: {
      fontFamily: "Poppins"
    }
  });

  const design = (
    <>
      <Provider store={storage}>
        <ThemeProvider theme={Theme}>
          <Paper style={{minHeight:"100vh"}}>
            <Router>
              <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<Forgot />} />
               
                  <Route path="admin-panel" element={<Admin />}>
                    <Route path="dashboard/modern" element={<Modern />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="notes" element={<Notes />} />
                    <Route path="*" element={<Notfound />} />
                  </Route>
                
                <Route path="*" element={<Notfound />} />
              </Routes>
            </Router>
          </Paper>
        </ThemeProvider>
      </Provider>
    </>
  );
  return design;
}

export default App;

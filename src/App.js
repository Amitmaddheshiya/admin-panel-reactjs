import {BrowserRouter as Router , Routes, Route} from "react-router-dom";
import Signup from './allComponents/Signup/Signup';
import Login from './allComponents/Login/Login';
import Admin from './allComponents/Admin/Admin';
import Notfound from './allComponents/Notfound/Notfound';
import Dashboard from './allComponents/Admin/Dashboard/Dashboard';


const App = ()=>{
  const design = (
    <>
   <Router>
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/login" element={<Login />} />

      <Route path="/admin-panel" element={<Admin />}>
      <Route path="dashboard" element={<Dashboard />} />
      </Route>

      <Route path="*" element={<Notfound />} />
    </Routes>
   </Router>
    </>
    
  );
  return design;
}
export default App;
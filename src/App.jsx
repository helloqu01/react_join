
import Join_form from './components/join_form/Join_form.jsx';
import Login from './components/login/Login'
import Missing from './components/missing/Missing.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home_page.jsx';
import Protect_page from './components/protect_page/Protect_page.jsx';
import RequireAuth from './components/RequireAuth/RequireAuth.jsx';
import Unauthorized from './components/Unauthorized/Unauthorized'
function App() {
  
  const ROLES = {
    'User': 2001,
    'Editor': 1984,
    'Admin': 5150
  }
  


  return (
    <div className="App">

    <BrowserRouter>
    <Routes>
       {/* public routes */}
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/Join_form" element={<Join_form />}></Route>
      <Route path="/unauthorized" element={<Unauthorized />} />
  
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/protect_page" element={<Protect_page />} />
        </Route>

        


       {/* catch all */}
       <Route path="*" element={<Missing />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;

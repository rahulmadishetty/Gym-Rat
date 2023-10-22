
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { HOME, PROFILE, SIGN_IN, SIGN_UP } from './constants/routes';

import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to={SIGN_UP.INDEX} />} />
        <Route path={HOME.INDEX} element={<Home />} />
        <Route path={PROFILE.INDEX} element={<Profile />} />
        <Route path={SIGN_UP.INDEX} element={<SignUp />} />
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App

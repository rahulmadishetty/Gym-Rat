
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { SIGN_IN, SIGN_UP } from './constants/routes';

import SignUp from './pages/SignUp';
import SignIn from "./pages/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Navigate to={SIGN_UP.INDEX} />} />
        <Route path={SIGN_UP.INDEX} element={<SignUp />} />
        <Route path={SIGN_IN.INDEX} element={<SignIn />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './assets/scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Onboardingprovider } from './context/Onboarding.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Onboardingprovider>
      <App />
    </Onboardingprovider>
  </React.StrictMode>,
)

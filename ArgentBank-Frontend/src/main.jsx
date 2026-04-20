import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Layout from './Layout';

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Router>
      <Layout />
    </Router>
  </StrictMode>,
)

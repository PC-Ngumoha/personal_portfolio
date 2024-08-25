// App-specific imports
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 3rd-party CSS dependency imports
import 'react-tooltip/dist/react-tooltip.css';
import 'react-responsive-modal/styles.css';
import 'aos/dist/aos.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

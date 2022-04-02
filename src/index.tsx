import ReactDOM from 'react-dom/client';
import './index.scss'; /* scss instead of css */

import 'pace-js'; /* custom (not from CRA) */
import 'pace-js/themes/silver/pace-theme-minimal.css'; /* custom (not from CRA) */

import App from './App';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');

const root = ReactDOM.createRoot(container as HTMLElement);
root.render(<App />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

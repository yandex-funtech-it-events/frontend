import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import store from './libs/store.ts';
import theme from './libs/theme.tsx';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <CssBaseline />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    </LocalizationProvider>
  </React.StrictMode>
);

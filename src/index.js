import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/home/App';
import theme from './common/mui/theme';
import { ThemeProvider } from '@material-ui/core/styles';
import reportWebVitals from './common/utils/reportWebVitals';

document.body.style.backgroundColor = 'silver';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

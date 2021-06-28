import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import DataTable from '../table/DataTable';
import initialState from '../../common/state';
import bomEndpoints from '../../common/data/bom-endpoints';
import getBomData from '../../service/get-bom-data';

// custom alert dialog from Material UI website
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const App = () => {
    const [rows, setRows] = useState(initialState.rows);
    const [error, setError] = useState(initialState.error);
    const [open, setOpen] = useState(initialState.errorSnackbar);

    useEffect(() => {
        bomEndpoints.forEach((endpoint) => {
            getBomData(endpoint)
                // foreach endpoint, getBomData, append to the array (rows)
                .then(async (response) => {
                    if (!response.ok) {
                        return Promise.reject(response);
                    }
                    const data = await response.json();
                    const dataObj = data.observations.data[0];
                    dataObj.link = endpoint;
                    setRows((oldRows) => [...oldRows, dataObj]); // append to existing state
                })
                // if error, setError, which should diplay Snackbar with error message (use default from spec)
                .catch(async (error) => {
                    const message = await error.json();
                    setOpen(true);
                    setError(`${error.status}: ${message.error}`);
                });
        });
    }, []);

    const handleClose = (event, reason) => {
        if (event && reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    return (
        <Container maxWidth="lg">
            {/* error snackbar */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {/* error message */}
                <Alert onClose={handleClose} severity="error">
                    {error}
                </Alert>
            </Snackbar>
            {/* headers */}
            <Typography align="center" color="primary" variant="h2">
                BOM API Testing Website
            </Typography>
            <Typography align="center" color="primary" variant="h4">
                Weather Data
            </Typography>
            <br />
            {/* table */}
            <DataTable rows={rows} error={error} />
        </Container>
    );
};

export default App;

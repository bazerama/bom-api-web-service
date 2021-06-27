import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const DataTable = ({ rows = {}, error = {} }) => {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                {error.title ? (
                    <TableBody>
                        <Typography>{error}</Typography>
                    </TableBody>
                ) : (
                    <React.Fragment>
                        <TableHead>
                            <TableRow>
                                <TableCell style={{ fontWeight: 'bolder' }}>
                                    Weather Station Name
                                </TableCell>
                                <TableCell style={{ fontWeight: 'bolder' }} align="right">
                                    Apparent Temperature (°C)
                                </TableCell>
                                <TableCell style={{ fontWeight: 'bolder' }} align="right">
                                    Latitude
                                </TableCell>
                                <TableCell style={{ fontWeight: 'bolder' }} align="right">
                                    Longitude
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{row.apparent_t}</TableCell>
                                    <TableCell align="right">{row.lat}</TableCell>
                                    <TableCell align="right">{row.long}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </React.Fragment>
                )}
            </Table>
        </TableContainer>
    );
};

DataTable.propTypes = {
    rows: PropTypes.array,
    error: PropTypes.object,
};

export default DataTable;

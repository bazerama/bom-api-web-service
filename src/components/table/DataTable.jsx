import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

// sort by apparent_t ascending
const sortFn = (x, y) => {
    return x.apparent_t - y.apparent_t;
};

const DataTable = ({ data = {}, error = {}, tempMin = '' }) => {
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
                                    <TableSortLabel active={true} direction={'asc'}>
                                        Apparent Temperature (°C)
                                    </TableSortLabel>
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
                            {data.array
                                .sort((x, y) => sortFn(x, y))
                                .map((row) => {
                                    const apptFloat = parseFloat(row.apparent_t);
                                    console.log(apptFloat);
                                    if (
                                        row.name &&
                                        row.name.length > 0 &&
                                        apptFloat > parseInt(tempMin)
                                    ) {
                                        return (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    <Link
                                                        style={{
                                                            textDecoration: 'none',
                                                            color: 'blue',
                                                        }}
                                                        target="_blank"
                                                        href={data.link}
                                                    >
                                                        {row.name}
                                                    </Link>
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.apparent_t ? row.apparent_t : 'No Data'}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.lat ? row.lat : 'No Data'}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {row.lon ? row.lon : 'No Data'}
                                                </TableCell>
                                            </TableRow>
                                        );
                                    }
                                })}
                        </TableBody>
                    </React.Fragment>
                )}
            </Table>
        </TableContainer>
    );
};

DataTable.propTypes = {
    data: PropTypes.object,
    error: PropTypes.string,
    tempMin: PropTypes.string,
};

export default DataTable;

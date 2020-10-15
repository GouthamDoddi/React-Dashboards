import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

import Layout from './Components/Layout/Dashboard'
import './App.css';


const useStyles = makeStyles(theme => ({
    grid: {
        height: '100',
        width: '100',
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.secondary,
        background: theme.palette.success.light
    }
}));

function App () {
    const classes = useStyles();
    return (
        <div >
            <Navbar />
            <Grid container style={{ height:'50%' }} spacing={2}  className={classes.grid}>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper}>component</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper}>component</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper}>component</Paper>
                </Grid>
                <Grid item xs={6} md={3}>
                    <Paper className={classes.paper}>component</Paper>
                </Grid>
            </Grid>
            <Grid container style={{height: '50%'}} spacing={2} className={classes.grid}>
                <Grid item xs={12} md={8}>
                    <Paper className={classes.paper}>Checklist</Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper className={classes.paper}>Graph</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;


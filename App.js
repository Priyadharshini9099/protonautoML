import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

import PassengerDetails from './images/PassengerDetails.png';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return ( <
        Container maxidth = "lg" >
        <
        AppBar className = { classes.appBar }
        position = "static"
        color = "inherit" >
        <
        Typography className = { classes.heading }
        variant = "h2"
        align = "center" > PassengerDetails < /Typography> <
        img className = { classes.image }
        src = { PassengerDetails }
        alt = "PassengerDetails"
        height = "60" / >
        <
        /AppBar> <
        Grow in >
        <
        Container >
        <
        Grid container justify = "space-between"
        alignItems = "stretch"
        spacing = { 3 } >
        <
        Grid item xs = { 12 }
        sm = { 7 } >
        <
        Posts / >

        <
        /Grid> < /
        Grid > <
        Grid item xs = { 12 }
        sm = { 7 } >
        <
        Form / >
        <
        /Grid> < /
        Container > <
        /Grow> < /
        Container >
    )
}
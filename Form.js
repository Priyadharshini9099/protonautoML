import React, { useState } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        passenger: '',
        passengerId: '',
        name: '',
        age: '',
        ticketFare: '',
        cabinEmbarked: ''
    });
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = () => {
        e.preventDefault();

        dispatch(createPost(postData));

    }

    const clear = () => {

    }
    return ( <
        Paper className = { classes.paper } >
        <
        form autoComplete = "off"
        noValidate className = { '${classes.root}' '${classes.form}' }
        onSubmit = { handleSubmit } >
        <
        Typography variant = "h6" > Passenger < /Typography> <
        TextField name = "passengerId"
        variant = "outlined"
        label = "passengerId"
        fullWidth value = { postData.passengerId }
        onChange = {
            (e) => setPostData({...postData, passengerId: e.target.value })
        }
        /> <
        TextField name = "name"
        variant = "outlined"
        label = "name"
        fullWidth value = { postData.name }
        onChange = {
            (e) => setPostData({...postData, name: e.target.value })
        }
        /> <
        TextField name = "age"
        variant = "outlined"
        label = "age"
        fullWidth value = { postData.age }
        onChange = {
            (e) => setPostData({...postData, age: e.target.value })
        }
        /> <
        TextField name = "ticketFare"
        variant = "outlined"
        label = "ticketFare"
        fullWidth value = { postData.ticketFare }
        onChange = {
            (e) => setPostData({...postData, ticketFare: e.target.value })
        }
        /> <
        TextField name = "cabinEmbarked"
        variant = "outlined"
        label = "cabinEmbarked"
        fullWidth value = { postData.cabinEmbarked }
        onChange = {
            (e) => setPostData({...postData, cabinEmbarked: e.target.value })
        }
        /> <
        div className = { classes.fileInput } > < FileBase type = "file"
        multiple = { false }
        onDone = {
            ({ base64 }) => setPostData({...postData.selectedFile: base64 })
        }
        /> <
        Button className = { classes.buttonSubmit }
        variant = "contained"
        color = "primary"
        size = "large"
        type = "submit"
        fullWidth > Submit < /Button> <
        Button variant = "contained"
        color = "secondary"
        size = "small"
        onClick = { clear }
        type = "submit" > clear < /Button>

        <
        /div>

        <
        /form> < /
        Paper >
    );

}
export default Form;
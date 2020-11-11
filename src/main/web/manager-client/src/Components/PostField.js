import React, { useState } from 'react';
import InputBox from './InputBox';
import UserBox from './UserBox';
import DatePicker from './DatePicker';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import Axios from 'axios';
import moment from 'moment';
import { withStyles } from '@material-ui/core/styles';

const PostField = () => {

    const [user, setUser] = useState(null);
    const [task, setTask] = useState(null);
    const [date, setDate] = useState(moment().format('YYYY-MM-DD HH:MM'));
    const [successOpen, setSuccessOpen] = useState(false);
    const [errorOpen, setErrorOpen] = useState(false);

    const styles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        background: '#282c34',
        alignItems: 'center',
        color: '#E6B447',
        paddingTop: 20,
        paddingRight: 20
    }

    const ColorButton = withStyles((theme) => ({
        root: {
          color: 'black',
          backgroundColor: 'crimson',
          '&:hover': {
            backgroundColor: 'crimson',
          },
        },
      }))(Button);

    const userExtractor = (userText) => {
        setUser(userText);
    }

    const taskExtractor = (text) => {
        setTask(text)
    }

    const dateExtractor = (dateInput) => {
        setDate(dateInput.format('YYYY-MM-DD HH:MM'));
    }

    const submitTask = () => {
        if (user && task && date) {
            let data = {
                "user": user,
		        "dueDate": date,
		        "task": task
            }
            Axios.post(
                'http://localhost:8080/items/post',
                data
            );
            setSuccessOpen(true);
        } else {
            setErrorOpen(true);
        }
    }

    const handleSuccessClose = () => {
        setSuccessOpen(false);
    }

    const handleErrorClose = () => {
        setErrorOpen(false);
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }      

    return (
        <div style={styles}>
            <p>Post a task in the database: </p>
            <UserBox getUser={userExtractor}/>
            <InputBox getTask={taskExtractor}/>
            <div>
                <div>Due by:</div>
                <DatePicker getDate={dateExtractor}/>
            </div>
            <ColorButton variant="contained" size="medium" onClick={()=>submitTask()}>Submit</ColorButton>
            <Snackbar open={successOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity="success">
                    Task submitted!
                </Alert>
            </Snackbar>
            <Snackbar open={errorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity="error">
                    Error! Provide all details!
                </Alert>
            </Snackbar>
        </div>
    );
}

export default PostField;
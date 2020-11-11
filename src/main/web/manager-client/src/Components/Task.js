import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import axios from 'axios';

import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';
import img10 from '../img/10.jpg';

const Task = ({user, id, due, text, getItems}) => {

    const [deleteOpen, setDeleteOpen] = useState(false);
    const imgSrc = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
    const randomImg = imgSrc[Math.floor(Math.random() * imgSrc.length)];

    const ColorButton = withStyles((theme) => ({
        root: {
          color: 'black',
          backgroundColor: 'crimson',
          '&:hover': {
            backgroundColor: 'crimson',
          },
        },
      }))(Button);

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        large: {
          width: theme.spacing(14),
          height: theme.spacing(14),
        },
      }));

    const styling = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5
    }


    const deleteItem = () => {
        axios.delete('http://localhost:8080/items/'+id)
        .then(() => {
            getItems();
            setDeleteOpen(true);
        })
    }

    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleDeleteClose = () => {
        setDeleteOpen(false);
    }

    const classes = useStyles();
    return(
        <div>
            <div style={styling}>
                <Avatar src={randomImg} className={classes.large}/>
                <div>
                   User:
                   <p>{user}</p>
                </div>
                <div>
                   Due by:
                   <p>{due}</p>
                </div>
                <div>
                   Task:
                   <p>{text}</p>
                </div>
                <div>
                   <ColorButton variant="contained" size="small" onClick={()=>deleteItem()}>Delete</ColorButton>
                </div>
            </div>
            <Divider variant="fullWidth" style={{backgroundColor: '#E6B447'}}/>
            <Snackbar open={deleteOpen} autoHideDuration={3000} onClose={handleDeleteClose}>
                <Alert onClose={handleDeleteClose} severity="info">
                    Item deleted!
                </Alert>
            </Snackbar>
        </div>
    );


}

export default Task;
import React, { useState } from 'react';
import UserBox from './UserBox';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const SearchField = ({getByUser, getAll}) => {

    const [user, setUser] = useState(null);

    const ColorButton = withStyles((theme) => ({
        root: {
          color: 'black',
          backgroundColor: 'crimson',
          '&:hover': {
            backgroundColor: 'crimson',
          },
        },
      }))(Button);

    const container = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridGap: 80,
        background: '#282c34',
        alignItems: 'center',
        color: '#E6B447',
        paddingTop: 20,
        paddingBottom: 20,
        paddingRight: 20
    }

    return (
        <div style={container}>
            <p>Search by username or get all posts:</p>
            <UserBox getUser={setUser}/>
            <ColorButton variant="contained" size="medium" onClick={()=>getByUser(user)}>Search by user</ColorButton>
            <ColorButton variant="contained" size="medium" onClick={()=>getAll()}>See all posts</ColorButton>
        </div>
    );
}

export default SearchField;
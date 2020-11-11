import React, {useState} from 'react';
import PostField from './PostField';
import SearchField from './SearchField';
import TaskContainer from './TaskContainer';
import axios from 'axios';

const Body = () => {

  const [allPosts, setAllPosts] = useState(null);
  const [postByUser, setPostByUser] = useState(null);
  const [filter, setFilter] = useState('none');

  const getPostsByUser = (user) => {
    axios.get('http://localhost:8080/items/'+user)
        .then(response => {
            return response.data;
        })
        .then(data => {
            setPostByUser(data);
            setFilter('user');
        })
        .catch(function (error) {
            console.log(error);
        })
  }

  const getAllPosts = () => {
    axios.get('http://localhost:8080/items')
        .then(response => {
          return response.data;
        })
        .then(data => {
          setAllPosts(data);
          setFilter('all');
        })
  }

  const getPostsByFilterType = () => {
      if (filter === 'none') {
          return null;
      } else if (filter === 'user') {
          return postByUser
      }
      return allPosts;
  }

  return (
   <div>
      <PostField />
      <SearchField getByUser={getPostsByUser} getAll={getAllPosts}/>
      <div style={{height: 5, background: '#E6B447'}}></div>
      <TaskContainer tasks={getPostsByFilterType()} refresh={getAllPosts}/>
   </div>
  );

}

export default Body;

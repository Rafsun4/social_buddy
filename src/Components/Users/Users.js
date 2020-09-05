import React from 'react';
import './Users.css';
import { useState, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import Posts from '../Posts/Posts';

const Users = () => {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, []);


    return (
        <Grid>
            <Grid item xs={12}>
                {
                    posts.map(post => <Posts
                        posts={post}
                        key={post.id}
                    ></Posts>)
                }
            </Grid>
        </Grid>
    );
};

export default Users;
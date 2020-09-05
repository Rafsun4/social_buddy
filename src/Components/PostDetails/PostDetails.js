import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './postDetails.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import Comments from '../Comments/Comments';
import NavBar from '../NavBar/NavBar';

const PostDetails = () => {
    const {id} = useParams();

    const [posts, setPostDetails] = useState({});
    const {title, body} = posts;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetails(data))
    }, [id]);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data))
    }, [id])

    const useStyles = makeStyles({
        root: {
            maxWidth: 900,
            backgroundColor: "#a0ead0",
            margin: '20px',
            borderRadius: '10px',
            padding: '5px',
        },
    });
    const classes = useStyles();

    return (
        <div>
        <NavBar></NavBar>
            <Container maxWidth="md">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h3">
                                <small>Title: {title}</small>
                            </Typography>
                            <Typography variant="h3" color="textPrimary" component="h2">
                                <small>Post: {body}</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <h1>Comments:</h1>
                    <hr />
                    {
                        comments.map(comments => <Comments comments={comments} key={comments.id}></Comments>)
                    }
                </Card>
            </Container>
        </div>
    );
};

export default PostDetails;


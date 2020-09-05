import React from 'react';
import './Posts.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';


const Posts = (props) => {
    const {title, id} = props.posts;

    const useStyles = makeStyles({
        root: {
            maxWidth: 900,
            backgroundColor: "#a0ead0",
            margin: '20px',
            borderRadius: '10px',
            padding: '5px'
        }
    });

    const classes = useStyles();

    return (
        <div>
            <Grid>
                <Grid item xs={12}>
                    <Card className={classes.root}>
                        <CardActionArea className="style-post">
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {id}
                                </Typography>
                                <Typography variant="body1" color="textPrimary" component="h2">
                                    {title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Link to={`/posts/${id}`}>
                                <Button variant="contained" size="medium" color="primary" className={classes.margin}>
                                    Read More
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
};

export default Posts;


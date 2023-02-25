import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const EventCard = (props) => {
    return (
        <Card elevation={10} sx={{ mb:10, width: 280, maxHeight: 350 }}>
            <CardMedia 
                sx={{ height: 160 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography textAlign={"left"} gutterBottom sx={{minHeight:80}} variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography textAlign={"left"} variant="body2" color="text.secondary">
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={props.link} size="small">Register</Button>
            </CardActions>
        </Card>
    );
}

export default EventCard;

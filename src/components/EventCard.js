import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const EventCard = (props) => {
    return (
        <Card elevation={10} sx={{ mx:{xs:"none", sm:2}, borderRadius:3, mb:10, width: 300,  }}>
            <CardMedia 
                sx={{ height: 300 }}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography fontFamily={"Poppins"}  textAlign={"left"} gutterBottom sx={{minHeight:80}} variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography fontFamily={"Poppins"}  textAlign={"left"} gutterBottom sx={{maxHeight:40}} variant="h7" component="div">
                    {props.short}
                </Typography>
                <Typography mb={-2} fontWeight={900} textAlign={"left"} variant="h5" color="text.secondary">
                    {props.price}
                </Typography>
            </CardContent>
            <CardActions>
                <Button target='_blank' style={{
                    fontFamily:"Poppins",
                    borderColor:"#f8e5e8",
                    backgroundColor:"rgb(230, 100, 30)"
                }}  href={props.link} size="small">Register</Button>
                <Typography flexGrow={1}/>
                <Typography fontFamily={"Poppins"}>Genre - {props.genre}</Typography>
            </CardActions>
        </Card>
    );
}

export default EventCard;

import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const PrevTalksCard = (props) => {
    return (
        <Card elevation={10} sx={{ mx:{xs:"none", sm:2}, borderRadius:3, mb:10, width: 300,  }}>
            <CardMedia 
                sx={{ height: 300 }}
                image={props.image + "-/preview/938x432/-/quality/smart/-/format/auto/"}
                title={props.name}
            />
            <CardContent>
                <Typography fontFamily={"Poppins"}  textAlign={"left"} gutterBottom sx={{minHeight:40}} variant="h5" component="div">
                    {props.name}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default PrevTalksCard;

import { Card, CardActions, CardContent, CardMedia, Typography,Box } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const EventCard = (props) => {
    console.log(props)
    return (
        <Card elevation={10} sx={{ mx:{xs:"none", sm:2}, borderRadius:3, mb:10, width: 300,  }}>
            <CardMedia 
                sx={{ height: 300 }}
                image={props.image}
                title={props.name}
            />
            <CardContent >
                <Typography fontFamily={"Poppins"}  textAlign={"left"} gutterBottom sx={{minHeight:80}} variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography fontFamily={"Poppins"}  textAlign={"left"} gutterBottom sx={{maxHeight:40}} variant="h7" component="div">
                    {props.short}
                </Typography>
               
                <Box
                mt={1}
                mb={1}
            >
                {props.prize != "None" && 
                <Typography mt={2} fontWeight={800} textAlign={"left"} variant="h6" color="text.secondary">
                Prize Money: {props.prize}
            </Typography>}
                <Typography  mt={1} fontWeight={800} textAlign={"left"} variant="subtitle1" color="text.secondary">
                    Registration Fees: {props.price}
                </Typography>
                
            </Box>
                
                
                
            </CardContent>
            <CardActions  >
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

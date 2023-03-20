import { Card, CardActions, CardContent, CardMedia, Typography,Box } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const EventCard = (props) => {
    console.log(props)
    return (
        <Card elevation={10} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between", mx:{xs:"none", sm:2}, borderRadius:3, mb:10, width: 300,  }}>
            <CardContent sx={{ pt:0, px:0, display:"flex", flexDirection:"column", justifyContent:"space-around" }}>
                <CardMedia 
                    sx={{ height: 300 }}
                    image={props.image}
                    title={props.name}
                />
            
                <Typography sx={{pl:1, pt:1}} fontFamily={"Poppins"}  textAlign={"left"}  variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography fontFamily={"Poppins"} textAlign={"left"} gutterBottom sx={{pl:1}} variant="h7" component="div">
                    {props.short}
                </Typography>
            </CardContent>
            <CardActions sx={{display:"flex", flexDirection:"column"}}>
                <Box pl={0.5} sx={{
                    width:"100%",
                    alignItems:"start"
                }}>
                    {props.prize != "None" && 
                        <Typography mt={2}  fontWeight={800} textAlign={"left"} variant="h5" color="text.secondary">
                        Prize Money: {props.prize}
                        </Typography>
                    }
                    <Typography  mt={1} mb={0} textAlign={"left"} variant="h6" color="text.secondary">
                        Registration <div style={{display:"inline", fontWeight:800}}> {props.price} </div>
                    </Typography>
                </Box>
                <Box sx={{display:"flex", width:"100%", flexDirection:"row", justifyContent:"space-between"}}>
                <Button target='_blank' 
                    style={{
                        fontFamily:"Poppins",
                        borderColor:"#f8e5e8",
                        backgroundColor:"rgb(230, 100, 30)"
                    }}  
                    href={props.link} size="small"
                >Register</Button>
                <Typography flexGrow={1}/>
                <Typography my={"auto"} fontFamily={"Poppins"}>Genre - {props.genre}</Typography>
                </Box>
            </CardActions>
           
        </Card>
    );
}

export default EventCard;

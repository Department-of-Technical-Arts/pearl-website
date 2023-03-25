import { Card, CardActions, CardContent, CardMedia, Typography, Box } from '@mui/material';
import React from 'react';
import { Button } from 'react-bootstrap';

const TalksCard = (props) => {
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
            <CardActions sx={{display:"flex", flexDirection:"column"}}>
                <Box pl={0.5} sx={{
                    width:"100%",
                    alignItems:"start"
                }}>
                    <Typography  mt={1} mb={0} textAlign={"left"} variant="h6" color="text.secondary">
                        <div style={{display:"inline", fontWeight:800}}> {props.date} {props.time} </div>
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
                <Typography my={"auto"} fontFamily={"Poppins"}>Venue - {props.desc}</Typography>
                </Box>
            </CardActions>
        </Card>
    );
}

export default TalksCard;

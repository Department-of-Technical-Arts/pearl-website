import React, { useState } from "react";
import { useEffect } from "react";
import "./Competitions.css";
import { useSelector } from "react-redux";
import { urlEndpoint } from "../../config";
import { useFirebase } from "../../hooks/useFirebase";
import { Drawer, Checkbox, FormGroup, FormControlLabel, Typography, Button } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const nullFilter = {
  "competitions":true,
  "workshops":true,
  "talks":true,
  "headliner":false
}
const EventPage = () => {
  const [drawerShown, setDrawerShown] = useState(false);
  const [competitions, workshops, loaded, talks] = useFirebase();
  const [filter, setFilter] = useState(nullFilter)
  const [events, setEvents] = useState([])


  useEffect(() => {
    if(loaded){
      addEvents()
    }

  }, [loaded]);

  const addEvents = (filter=nullFilter) =>{
    const temp = [];
    if (filter.competitions){
      Object.entries(competitions).forEach(([name, eachEvent])=>{
        temp.push(eachEvent)
      })
    }
    if (filter.workshops){
      Object.entries(workshops).forEach(([name, eachWorkshop])=>{
        temp.push(eachWorkshop)
      })
    }
    if (filter.talks){
      Object.entries(talks).forEach(([name, eachTalk])=>{
        temp.push(eachTalk)
      })
    }
    setEvents(temp)
  }
  const handleFilter = (type) => {
    let newFilter = nullFilter;
    Object.entries(filter).map(([name, value])=>{
      if (type==name){
        newFilter[type]=!filter[type];
      }else{
        newFilter[name]=filter[name];
        console.log(name)
      }
    })
    if (newFilter.competitions==false && newFilter.talks==false && newFilter.workshops==false){
      newFilter = nullFilter;
    }
    setFilter(newFilter);
    addEvents(newFilter);
    console.log(newFilter);
  }
  return (
    <div>
      <div className="background-container-competitions">
        <div className="background-competitions">
          <Drawer
            variant="temporary"
            // container={container}
            anchor="left"
            open={drawerShown}
            onClose={()=>setDrawerShown(false)}
            // ModalProps={{
            //   keepMounted: true, // Better open performance on mobile.
            // }}
            sx={{
              
              // display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box',
                width: 240,
                // height:{xs:"100vh", sm:"100vh"},
                // marginTop:"20vh", 
              },
            }}
          >
            
            <FormGroup sx={{
              mx:"auto",
              my:"auto"
            }}>
              <Typography variant="h4">Events</Typography>
              <FormControlLabel control={<Checkbox
                          checked={filter.competitions}
                          onChange={()=>handleFilter("competitions")}
                          inputProps={{ 'aria-label': 'controlled' }}
                          
                        />} label="Competitions" />
              <FormControlLabel control={<Checkbox
                          checked={filter.workshops}
                          onChange={()=>handleFilter("workshops")}
                          inputProps={{ 'aria-label': 'controlled' }}
                          
                        />} label="Workshops" />
              <FormControlLabel control={<Checkbox
                          checked={filter.talks}
                          onChange={()=>handleFilter("talks")}
                          inputProps={{ 'aria-label': 'controlled' }}
                          
                        />} label="Talks" />
              <FormControlLabel control={<Checkbox
                          checked={filter.headliner}
                          onChange={()=>handleFilter("headliner")}
                          inputProps={{ 'aria-label': 'controlled' }}
                          
                        />} label="Headliner" />
              <Button onClick={(e)=>{addEvents(); console.log(filter)}}>Reset</Button>
            </FormGroup>
            
          </Drawer>
          <div className="image-competitions"></div>
          <div className="content-competitions">
            <h1>EVENTS</h1>
          </div>
          <div className="content-competitions">
            {!drawerShown && <h4 onClick={()=>setDrawerShown(true)}><FilterAltIcon fontSize="large" />Filter</h4>}
          </div>
          <div className="card-container-competitions">
            {loaded ? (
              events.map(
                (eachEvent, index) => {
                  if (loaded) {
                    // if (filter.headliner && !eachEvent.headliner){ return}
                    return ( !(filter.headliner && eachEvent.headliner) &&
                      <a
                        key={index}
                        href={"https://"+eachEvent.details}
                      >
                        <div
                          className="hover-cards-competitions"
                          // style={{
                          //   backgroundImage: `url(${eachEvent.image_url})`,
                          // }}
                        >
                          <img src={eachEvent.image_url} className="competitions-image"/>
                          <p>{eachEvent.name}</p>
                        </div>
                      </a>
                    );
                  }
                }
              )
            ) : (
              <></>
            )}
            {(loaded && events.isEmpty) && <h1>NO EVENTS MATHCING THE FILTER </h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

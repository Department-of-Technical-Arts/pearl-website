import React, { useState } from "react";
import { useEffect } from "react";
import "./Competitions.css";
import { useFirebase } from "../../hooks/useFirebase";
import { Drawer, Checkbox, FormGroup, FormControlLabel, Typography, Button } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Sort } from "@mui/icons-material";
import useMixpanel from "../../hooks/useMixpanel";


const EventPage = () => {
  const nullFilter = {
    "competitions":true,
    "workshops":true,
    "talks":true,
    "headliner":false
  }

  //MARK: STATE VARIABLES
  const [value, setValue] = useState(1);
  const [drawerShown, setDrawerShown] = useState(false);
  const [filter, setFilter] = useState(nullFilter)
  const [events, setEvents] = useState([])

  //MARK: HOOKS VARIABLES
  const [competitions, workshops, loaded, talks] = useFirebase();
  const { eventClicked } = useMixpanel()

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
    if(filter.headliner){
      const headliners = temp.filter((eachEvent,index,array)=>{
        console.log()
        return eachEvent.headliner == true;
      })
      setEvents(headliners);
      return;
    }
    setEvents(temp);

  }
  const handleResetFilter = (e)=>{
    e.preventDefault;
    const newFilter = {
      "competitions":true,
      "workshops":true,
      "talks":true,
      "headliner":false
    };
    setFilter(newFilter);
    addEvents(newFilter)
    setValue(value*-1);
  }

  // Set Sort A to B , B to A
  const sortHandler = (e) => {
    e.preventDefault()
    let newEvents = events;
    newEvents = newEvents.sort((a,b)=>{
      return value*(a.name.localeCompare(b.name)) ;
    });
    setEvents(newEvents);
    setValue(value*-1);
  }

  // Set Filter states
  const handleFilter = (type) => {
    const newFilter = {
      "competitions":true,
      "workshops":true,
      "talks":true,
      "headliner":false
    };
    Object.entries(filter).map(([name, value])=>{
      if (type==name){
        newFilter[type]=!filter[type];
      }else{
        newFilter[name]=filter[name];
        console.log(name)
      }
    })
    if (newFilter.competitions==false && newFilter.talks==false && newFilter.workshops==false){
      const nfilter = {
        "competitions":true,
        "workshops":true,
        "talks":true,
        "headliner":false
      }
      setFilter(nfilter);
      addEvents(nfilter);
      return;
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
            anchor="left"
            open={drawerShown}
            onClose={()=>setDrawerShown(false)}
            sx={{
              '& .MuiDrawer-paper': { 
                boxSizing: 'border-box',
                width: 240,
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
              <Button onClick={handleResetFilter}>Reset</Button>
            </FormGroup>
          </Drawer>
          <div className="image-competitions"></div>
          <div className="content-competitions">
            <h1>EVENTS</h1>
          </div>
          <div className="content-competitions">
            {!drawerShown && <h4><p onClick={()=>setDrawerShown(true)}><FilterAltIcon fontSize="large" />Filter</p> <p onClick={sortHandler}><Sort />Sort {value==1 ? "A-Z":"Z-A"}</p></h4>}
          </div>
          <div className="card-container-competitions">
            {loaded && 
              events.map(
                (eachEvent, index) => {
                  if (loaded) {
                    return ( <a
                        key={index}
                        href={"https://"+eachEvent.details}
                        onClick={()=>{eventClicked(eachEvent.name, {})}}
                      >
                        <div
                          className="hover-cards-competitions"
                        >
                          <img src={eachEvent.image_url} className="competitions-image"/>
                          <p>{eachEvent.name}</p>
                        </div>
                      </a>
                    );
                  }
                }
              )
            }
            {(loaded && events.isEmpty) && <h1>NO EVENTS MATHCING THE FILTER </h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

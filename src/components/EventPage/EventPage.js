import React, { useState } from "react";
import { useEffect } from "react";
import "./Competitions.css";
import { useFirebase } from "../../hooks/useFirebase";
import { Drawer, Checkbox, FormGroup, FormControlLabel, Typography, Button, Container, Box } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { Sort } from "@mui/icons-material";
import useMixpanel from "../../hooks/useMixpanel";
import EventCard from "../EventCard";


const EventPage = ({setPage}) => {
  const nullFilter = {
    "competitions":true,
    "workshops":true,
    "talks":true,
    "games":true,
    "headliner":false
  }

  const nullGenreFilter = {"Art":true, "Dance":true, "Dramatics":true, "Music":true, "VFx":true, "Graphic Design":true, "Quizzes":true, "Comedy":true, "Cooking":true, "Language":true, "Movie":true, "Photography":true, "Fashion":true, "Gaming":true, "Journalism":true}


  //MARK: STATE VARIABLES
  const [value, setValue] = useState(1);
  const [drawerShown, setDrawerShown] = useState(false);
  const [filter, setFilter] = useState(nullFilter)
  const [genreFilterShown, setGenreFilterShown] = useState({"Art":false, "Dance": false,  "Dramatics":false, "Music":false, "VFx":false, "Graphic Design":false, "Quizzes":false, "Comedy":false, "Cooking":false, "Language":false, "Movie":false, "Photography":false, "Fashion":false, "Gaming":false, "Journalism":false})
  const [genreFilterApplied, setGenreFilterApplied] = useState(false);
  const [events, setEvents] = useState([])


  //MARK: Custom HOOKS VARIABLES
  const [competitions, workshops, loaded, talks, acc, games] = useFirebase();
  const { eventClicked } = useMixpanel()


  const [allEvents, setAllEvents] =useState([]);

  // Load The Page
  useEffect(() => {
    if(loaded){
      addEvents();
      setPage(true);
    }
    setPage(true);
  }, [loaded]);

  const addEvents = (filter=nullFilter) =>{
    const temp = [];
    if (filter.competitions){
      Object.entries(competitions).forEach(([name, eachEvent])=>{
        temp.push(eachEvent);
        
      })
    }
    if (filter.workshops){
      Object.entries(workshops).forEach(([name, eachWorkshop])=>{
        temp.push(eachWorkshop);
      })
    }
    if (filter.talks){
      Object.entries(talks).forEach(([name, eachTalk])=>{
        temp.push(eachTalk);
      })
    }
    if (filter.games){
      Object.entries(games).forEach(([name, eachGame])=>{
        temp.push(eachGame);
      })
    }
    if(filter.headliner){
      const headliners = temp.filter((eachEvent,index,array)=>{
        return eachEvent.headliner == true;
      })
      setEvents(headliners);
      return;
    }
    
    setEvents(temp);
    setAllEvents(temp);
  }



  // Handle Filters and Sorts
  //reset
  const handleResetFilter = (e)=>{
    e.preventDefault();
    const newFilter = {
      "competitions":true,
      "workshops":true,
      "talks":true,
      "games":true,
      "headliner":false
    };
    setFilter(newFilter);
    setGenreFilterApplied(false);
    setGenreFilterShown(nullGenreFilter);
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

  // Set Event type Filter states
  const handleFilter = (type) => {
    const newFilter = {
      "competitions":true,
      "workshops":true,
      "talks":true,
      "games":true,
      "headliner":false
    };
    Object.entries(filter).map(([name, value])=>{
      if (type==name){
        newFilter[type]=!filter[type];
      }else{
        newFilter[name]=filter[name];
      }
    })
    if (newFilter.competitions==false && newFilter.talks==false && newFilter.workshops==false && newFilter.games==false){
      const nfilter = {
        "competitions":true,
        "workshops":true,
        "talks":true,
        "games":true,
        "headliner":false
      };
      setFilter(nfilter);
      addEvents(nfilter);
      return;
    }
    setFilter(newFilter);
    addEvents(newFilter);
  }


  // Set genre event filter 
  const handleGenreFilter = (e, genre) => {
    if(!genreFilterApplied){
      makeGenreFilter(false);
      setGenreFilterApplied(true);
    }
    const tempFilter = genreFilterShown;
    tempFilter[genre] = !tempFilter[genre];
    if (!genreFilterNull()){
      setGenreFilterApplied(false);
      updateViewGenreFilter();
      setValue(value*-1);
      return;
    }
    setGenreFilterShown(tempFilter);
    updateViewGenreFilter();
    setValue(value*-1);
  }

  const genreFilterNull = () =>{
    Object.entries(genreFilterShown).forEach(([genre, value])=>{
      if(value == true){
        return false;
      }
    })
    return true;
  }

  const updateViewGenreFilter = () => {
    let temp = allEvents;
    const chosenGenres = []
      Object.entries(genreFilterShown).forEach(([genre, value])=>{
        if (value){
          chosenGenres.push(genre);
        }
      })
    if (chosenGenres.length != 0){
      temp = temp.filter((event, index)=>chosenGenres.find((genre)=>genre==event.genre))
    }
    else {
      setEvents(allEvents);
      return;
    }
    setEvents(temp)
  }

  const makeGenreFilter = (full) =>{
    const temp = genreFilterShown
    Object.entries(temp).forEach(([genre, value]) =>{
      temp[genre] = full;
    })
    setGenreFilterShown(temp);
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
              mt:5
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
              <FormControlLabel control={<Checkbox
                          checked={filter.games}
                          onChange={()=>handleFilter("games")}
                          inputProps={{ 'aria-label': 'controlled' }}
                          
                        />} label="Games" />
              <Button onClick={handleResetFilter}>Reset</Button>
            </FormGroup>
            <FormGroup sx={{
              mx:"auto",
              my:5
            }}>
              <Typography variant="h4">Genres</Typography>
              {Object.entries(genreFilterShown).map(([value, checked],index)=>{
                return <FormControlLabel key={index} control={<Checkbox
                          checked={genreFilterApplied ? genreFilterShown[value] : false}
                          onChange={(e)=>handleGenreFilter(e,value)}
                          inputProps={{ 'aria-label': 'controlled' }}
                        />} label={value} />
              })}
            </FormGroup>
          </Drawer>
          <div className="image-competitions"></div>
          <div className="content-competitions">
            <h1>EVENTS</h1>
          </div>
          <div className="content-filter">
            {!drawerShown
             && 
             <Container component={"div"} sx={{width:"100%", mt:-8, mr:13,}}>
              <Typography fontFamily={"Poppins"} flexGrow={1}></Typography>
              <Box component={"div"} sx={{display:"flex", flexDirection:"row"}}>
                <Typography fontFamily={"Poppins"} textAlign={"left"} mb={2} sx={{cursor:"pointer", ml:{xs:-4, sm:7}}}  variant="h4" onClick={()=>setDrawerShown(true)}>
                  <FilterAltIcon sx={{mx:"none", my:"auto"}} fontSize="larger" />Filter
                </Typography> 
                <Typography flexGrow={1}/>
                <Typography fontFamily={"Poppins"} textAlign={"left"} sx={{cursor:"pointer",  mr:{xs:-4, sm:0}}} variant="h4" onClick={sortHandler}>
                  <Sort sx={{my:"auto"}} fontSize="larger"/>{"   "}Sort {value==1 ? "A-Z":"Z-A"}
                </Typography>
              </Box>
             </Container>}
          </div>
          <div className="card-container-competitions">
            {loaded && 
              events.map(
                (eachEvent, index) => {
                  if (loaded) {
                    return (<EventCard genre={eachEvent.genre} link={"https://"+eachEvent.details} name={eachEvent.name} price={eachEvent.price} image={eachEvent.image_url} short={eachEvent.short}/>)
                  }
                }
              )
            }
            {loaded && events.isEmpty && <h1>NO EVENTS MATHCING THE FILTER </h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPage;

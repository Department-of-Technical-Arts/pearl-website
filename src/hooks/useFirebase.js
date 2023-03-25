import { ref, get, child } from "firebase/database"
import { useState, useEffect } from "react";
import StartFirebase from "../config";

export const useFirebase = ()=>{
    const [database, _] = StartFirebase()
    const [competitions, setCompetitions] = useState()
    const [workshops, setWorkshops] = useState()
    const [prevTalks, setPrevTalks] = useState();
    const [currTalks, setCurrTalks] = useState();
    const [games, setGames] = useState();
    const [passes, setPasses] = useState()
    const [accommodations, setAccommodations] = useState()
    const [loaded, setLoaded] = useState(false);
    
    useEffect(() => {
  
      get(child(ref(database), `events`)).then((snapshot) => {
        if (snapshot.exists()) {
          setCompetitions(snapshot.val().Competitions);
          setWorkshops(snapshot.val().Workshops);
          setPrevTalks(snapshot.val().Talks);
          setAccommodations(snapshot.val().Accommodations)
          setGames(snapshot.val().Games)
          setPasses(snapshot.val().Passes)
          setCurrTalks(snapshot.val().CurrTalks);
          setLoaded(true);
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });},[])
  
      return [competitions, workshops, loaded, prevTalks, accommodations, games, passes, currTalks]
  }
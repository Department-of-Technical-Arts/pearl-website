import { ref, get, child } from "firebase/database"
import { useState, useEffect } from "react";
import StartFirebase from "../config";

export const useFirebase = ()=>{
    const [database, _] = StartFirebase()
    const [competitions, setCompetitions] = useState()
    const [workshops, setWorkshops] = useState()
    const [talks, setTalks] = useState();
    const [games, setGames] = useState();
    const [accommodations, setAccommodations] = useState()
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
  
      get(child(ref(database), `events`)).then((snapshot) => {
        if (snapshot.exists()) {
          setCompetitions(snapshot.val().Competitions);
          setWorkshops(snapshot.val().Workshops);
          setTalks(snapshot.val().Talks)
          setAccommodations(snapshot.val().Accommodations)
          setGames(snapshot.val().Games)
          setLoaded(true);
        //   dispatch(Actions.initializeCompetitions(snapshot.val().Competitions));
          console.log(snapshot.val().Competitions)
        //   dispatch(Actions.initializeWorkshops(snapshot.val().Workshops));
        } else {
          console.log("No data available");
        }
      }).catch((error) => {
        console.error(error);
      });},[])
  
      return [competitions, workshops, loaded, talks, accommodations, games]
  }
import React from "react";
import "./Talks.css";
import talksImages from "../../images/events-photos/talks-images2";
import { useEffect } from "react";
import { useFirebase } from "../../hooks/useFirebase";
import TalksCard from "./TalkCard";
import PrevTalksCard from "./PrevTalkCard";

function Talks() {
  const [competitions, workshops, loaded, prevTalks, _, __, ___, currTalks] = useFirebase();
  // let talksNames = [
  //   "Shashi Tharoor",
  //   "Kiran Bedi",
  //   "Varun Dhawan",
  //   "Adivi Sesh",
  //   "Prajakta Koli",
  //   "Vicky Kaushal",
  //   "Be YouNick",
  //   "Shristi Srivastava",
  //   "General Bikram Singh (Retd.)",
  //   "Nidhi Narwal",
  //   "Bharat Karnad",
  //   "Warina Hussain",
  //   "Dr V Anantha Nageswaran",
  //   "Arun Prabhudesai",
  //   "Arvind Goel",
  //   "Dr. Ravindra Guptha",
  // ];
  useEffect(() => {
    document.title = "TALKS - PEARL 2023";
  }, []);

  return (
    <div>
      <div className="background-container-talks">
        <div className="background-talks">
          <div className="image-talks"></div>
          <div className="content-talks">
            <h1>TALKS</h1>
          </div>
          <div className="talks-container">
            <h4 className="talks-heading">PEARL 2023 SPEAKERS</h4>
            <div className="card-container-talks">
              {loaded ? currTalks && (
                Object.entries(currTalks).map(
                  ([name, eachTalk], index) => {
                    if (loaded) {
                      return (<TalksCard key={name} link={eachTalk.details} desc={eachTalk.short} date={eachTalk.day} time={eachTalk.time} name={eachTalk.name} image={eachTalk.image_url} />
                      );
                    }
                  }
                )
              ) : (
                <></>
              )}
            </div>
            <h4 className="talks-heading">PREVIOUS SPEAKERS</h4>
            <div className="card-container-talks">
              {loaded ? (
                Object.entries(prevTalks).map(
                  ([name, eachTalk], index) => {
                    if (loaded) {
                      return (<PrevTalksCard key={name} name={eachTalk.name} image={eachTalk.image_url} />
                      );
                    }
                  }
                )
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );}
export default Talks;
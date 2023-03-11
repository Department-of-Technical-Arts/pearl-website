import React from "react";
import "./Talks.css";
import talksImages from "../../images/events-photos/talks-images2";
import { useEffect } from "react";
import { useFirebase } from "../../hooks/useFirebase";
import TalksCard from "./TalkCard";

function Talks() {
  const [competitions, workshops, loaded, talks] = useFirebase();
  let talksNames = [
    "Shashi Tharoor",
    "Kiran Bedi",
    "Varun Dhawan",
    "Adivi Sesh",
    "Prajakta Koli",
    "Vicky Kaushal",
    "Be YouNick",
    "Shristi Srivastava",
    "General Bikram Singh (Retd.)",
    "Nidhi Narwal",
    "Bharat Karnad",
    "Warina Hussain",
    "Dr V Anantha Nageswaran",
    "Arun Prabhudesai",
    "Arvind Goel",
    "Dr. Ravindra Guptha",
  ];
  useEffect(() => {
    document.title = "TALKS - PEARL 2023";
    console.log(loaded);
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
          <h4 className="talks-heading">PREVIOUS TALKS</h4>
          <div className="card-container-talks">
            {loaded ? (
              Object.entries(talks).map(
                ([name, eachTalk], index) => {
                  console.log(eachTalk);
                  console.log(loaded);
                  if (loaded) {
                    return (<TalksCard name={eachTalk.name} image={eachTalk.image_url} />
                    );
                  }
                }
              )
            ) : (
              <></>
            )}
          </div>
          {/* <h4 className="talks-heading">PREVIOUS SPEAKERS</h4> */}
            {/* {
              <div className="prev-talks">
                {talksNames.map((prevTalk, index) => {
                  return (
                    <a>
                    <div
                      key={prevTalk}
                      className="hover-cards-talks"
                      style={{
                        backgroundImage: `url(${talksImages[index]})`,
                      }}
                    >
                      <p>{prevTalk}</p>
                    </div></a>
                  );
                })}
              </div>
            } */}
        </div>
        </div>
      </div>
    </div>
  );}
export default Talks;
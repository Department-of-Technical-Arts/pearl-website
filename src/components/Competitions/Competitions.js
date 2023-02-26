import React, { useState } from "react";
import { useEffect } from "react";
import "./Competitions.css";
import { useSelector } from "react-redux";
import { urlEndpoint } from "../../config";
import { useFirebase } from "../../hooks/useFirebase";

const Competitions = () => {
  // const {competitions} = useSelector ((state) => state.displayData)
  const [competitions, workshops, loaded] = useFirebase();

  console.log(competitions)
  useEffect(() => {
    document.title = "COMPETITIONS - PEARL";
    console.log(loaded);
  }, []);

  return (
    <div>
      <div className="background-container-competitions">
        <div className="background-competitions">
          <div className="image-competitions"></div>
          <div className="content-competitions">
            <h1>COMPETITIONS</h1>
          </div>
          <div className="card-container-competitions">
            {loaded ? (
              Object.entries(competitions).map(
                ([name, eachCompetition], index) => {
                  console.log(eachCompetition);
                  console.log(loaded);
                  if (loaded) {
                    return (
                      <a
                        key={index}
                        href={"https://"+eachCompetition.details}
                      >
                        <div
                          className="hover-cards-competitions"
                          // style={{
                          //   backgroundImage: `url(${eachCompetition.image_url})`,
                          // }}
                        >
                          <img src={eachCompetition.image_url} className="competitions-image"/>
                          <p>{eachCompetition.name}</p>
                        </div>
                      </a>
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
  );
};

export default Competitions;

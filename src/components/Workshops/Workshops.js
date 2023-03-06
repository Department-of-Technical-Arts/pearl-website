import React from "react";
import { useEffect } from "react";
import "./Workshops.css";
import "../Events/Events.css"
import { urlEndpoint } from "../../config";
import { useSelector } from "react-redux";
import { useFirebase } from "../../hooks/useFirebase";
import { useMediaQuery } from "@mui/material";
const Workshops = () => {
  // const {workshops} = useSelector ((state) => state.displayData)
  const isMobile = useMediaQuery('(max-width: 500px)','(max-height: 480px)');
  const [competitions, workshops, loaded, talks, accommodations] = useFirebase();
  useEffect(() => {
    document.title = "ACCOMMODATIONS - PEARL";
  }, []);

  return (
    <div>
      <div className="background-container-workshops">
        <div className="background-workshops">
          <div className="content-workshops">
            <h1>ACCOMMODATIONS</h1>
          </div>
          <div className="image-workshops"></div>
          {/* <div className="card-container-workshops"> */}
            {/* {
                            workshops.map((eachWorkshop)=>{
                                if (eachWorkshop.IMAGEURL)
                                return(
                                    <a key={eachWorkshop.NAME} href={`/contest/work/${eachWorkshop.NAME.toLowerCase()}`}><div className='hover-cards-workshops' style={{ 
                                        backgroundImage: `url(${urlEndpoint}${eachWorkshop.IMAGEURL})`
                                      }}><p>{eachWorkshop.NAME}</p></div></a>
                                )
                            })
                        } */}
              <div className='card-container' >
              { loaded && Object.entries(accommodations).map(([name, eachPass]) => {
                  return <a key={name} href={"https://"+eachPass.detailsLink}><div className='hover-cards-passes' style={{ backgroundImage: `url("/Pearl_logo2023.png")`}}><p className='passes-name' >{eachPass.name}</p><p className='passes-prize' >₹ {eachPass.price}</p><p className='passes-buy' >{!isMobile ? <>CLICK</> : <>TAP</>} TO BUY</p></div></a>
              })}
              {/* <a href="/competitions"><div className='hover-cards-one' ><p>Competitions</p></div></a>
              <a href="/workshops"><div className='hover-cards-two'><p>workshops</p></div></a>
              <a href="/talks"> <div className='hover-cards-three'><p>talks</p></div></a>
              <a href="/proshows"><div className='hover-cards-four'> <p>pro-shows</p></div></a>
              <a href="/prefest"><div className='hover-cards-four' style={{ backgroundImage: `url("/events-photos/cubing-cover.jpeg")`}}> <p>pre-fest</p></div></a> */}
          </div>
            {/* {loaded ? (
              Object.entries(accommodations).map(([name, eachAccomodation]) => {
                // if (eachWorkshop.image_url)
                    
                  return (
                    <a
                      key={eachAccomodation.name}
                      href={"https://"+eachAccomodation.details}
                    >
                      <div
                        className="hover-cards-competitions"
                        // style={{
                        //   backgroundImage: `url(${eachWorkshop.image_url})`,
                        // }}
                      >
                        <img src="/Pearl_logo2023.png" className="competitions-image"/>
                        <p>{eachAccomodation.name}</p>
                        <p style={{mixBlendMode:"difference", marginTop:"3.5rem"}}>₹ {eachAccomodation.price}</p>
                      </div>
                    </a>
                  );
              })
            ) : (
              <></>
            )} */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Workshops;

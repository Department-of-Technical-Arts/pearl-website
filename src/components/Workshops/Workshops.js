import React from "react";
import { useEffect } from "react";
import "./Workshops.css";
import { urlEndpoint } from "../../config";
import { useSelector } from "react-redux";
import { useFirebase } from "../../hooks/useFirebase";
const Workshops = () => {
  // const {workshops} = useSelector ((state) => state.displayData)
  const [competitions, workshops, loaded] = useFirebase();
  useEffect(() => {
    document.title = "WORKSHOPS - PEARL";
  }, []);

  return (
    <div>
      <div className="background-container-workshops">
        <div className="background-workshops">
          <div className="content-workshops">
            <h1>WORKSHOPS</h1>
          </div>
          <div className="image-workshops"></div>
          <div className="card-container-workshops">
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
            {loaded ? (
              Object.entries(workshops).map(([name, eachWorkshop]) => {
                if (eachWorkshop.image_url)
                  return (
                    <a
                      key={eachWorkshop.name}
                      href={`/contest/comp/${eachWorkshop.name.toLowerCase()}`}
                    >
                      <div
                        className="hover-cards-competitions"
                        style={{
                          backgroundImage: `url(${eachWorkshop.image_url})`,
                        }}
                      >
                        <p>{eachWorkshop.name}</p>
                      </div>
                    </a>
                  );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshops;

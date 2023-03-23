import {React, useEffect} from 'react' ;
import "./Events.css"
import "../Workshops/Workshops.css";
import { useMediaQuery } from '@mui/material';
import { useFirebase } from '../../hooks/useFirebase';
const Passes = () => {
    const isMobile = useMediaQuery('(max-width: 500px)','(max-height: 480px)');
    const [competitions, workshops, loaded, talks, accommodations, games, passes] = useFirebase();
    useEffect(() => {
        document.title = "PASSES - PEARL 2023"
    }, []);

    return(
        <div>
      <div className="background-container-workshops">
        <div className="background-workshops">
          <div className="content-workshops">
            <h1>PASSES</h1>
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
              { loaded && passes ? <div className='card-container' > {Object.entries(passes).map(([name, eachPass]) => {
                  return <a key={name} href={"https://"+eachPass.details}><div className='hover-cards-passes' style={{ backgroundImage: `url("/Pearl_logo2023.png")`}}><p className='passes-name' >{eachPass.name}</p><p className='passes-prize' >₹ {eachPass.price}</p><p className='passes-buy' >{!isMobile ? <>CLICK</> : <>TAP</>} TO BUY</p></div></a>
              })} </div> : <div className="content-workshops">
            <h3>There are no passes yet. Please visit <a href="https://instagram.com/pearl.bitsh">Pearl 2023 Instagram Page</a> for more details</h3>
          </div>}
              
          
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
    )
}


export default Passes ;
import React from "react";  
import screenfull from "screenfull";  
import YouTube from "react-youtube";  
import DeviceDetector from "device-detector-js";  
import PropTypes from "prop-types";  
export default function YTPlayer(props) {  
 const dd = new DeviceDetector();  
 const mobile = dd.usesMobileBrowser();  
 const fullScreen = event => {  
  var iframe = event.target.getIframe();  
  if (screenfull.isEnabled) {  
   screenfull.request(iframe);  
  }  
 };  
 const opts = {  
  height: "100%",  
  width: "100%",  
  controls: "1"  
 };  
//  const useStyles = makeStyles({  
//   videoDiv: {  
//    width: "100%",  
//    height: "100%"  
//   }  
//  });  
//  const classes = useStyles();  
 return (  
  <YouTube  
//    containerClassName={classes.videoDiv}  
   videoId={props.id}  
   opts={opts}  
   onPlay={() => (mobile ? fullScreen : {})}  
  />  
 );  
}  
YTPlayer.propTypes = {  
 id: PropTypes.string  
}; 
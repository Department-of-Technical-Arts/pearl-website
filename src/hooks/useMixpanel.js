import mixpanel from 'mixpanel-browser';

const useMixpanel = () => {
    mixpanel.init('a55470e08585e6f21607a51da1d6ba39', {debug: true}); 
    
    const eventClicked = (eventID, properties) => {
        mixpanel.track(eventID, properties)
    }

    return {
        eventClicked,
    }
}

export default useMixpanel;

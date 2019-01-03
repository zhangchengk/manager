import * as React from 'react';
import Iframe from 'react-iframe'
export default class StatisticDiagram extends React.Component {
    render(){
        return(
       <Iframe 
            url="https://www.processon.com/view/link/5b560b2de4b08d36228bb25c"
            width='100%'
            height='700px'
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen/>
        );
    }
}



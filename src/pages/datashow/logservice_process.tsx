import * as React from 'react';
import Iframe from 'react-iframe'
export default class LogProcessDiagram extends React.Component {
    render(){
        return(
       <Iframe 
            url="https://www.processon.com/view/link/5b55b822e4b0555b39c0aeb4"
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



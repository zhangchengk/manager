import * as React from 'react';
import Iframe from 'react-iframe'
export default class LogDesignDiagram extends React.Component {
    render(){
        return(
       <Iframe 
            url="https://www.processon.com/view/link/5b558b74e4b0555b39c030a8"
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



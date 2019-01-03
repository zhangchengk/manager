import * as React from 'react';
import Iframe from 'react-iframe'
export default class LogApiDiaGram extends React.Component {
    render(){
        return(
       <Iframe 
    //    url="http://managebyzc.app.yyuap.com/static"
            url="https://www.zybuluo.com/vertex/note/1224073"
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



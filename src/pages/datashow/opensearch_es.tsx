import * as React from 'react';
import Iframe from 'react-iframe'
export default class OpensearchESDataShow extends React.Component {
    render(){
        return(
           
            <Iframe 
            url="https://dataplatform.yonyoucloud.com/app/data_board_link/b20694fc-5e99-4b48-a660-a69cf6e68aa6/1/571eded15eef339f124981242852ad96e6065c135aa58e362b79c8b4196cce7843f6c81c12a4f530d9fa8e66ada15ea205ee7e34e3b46b4daadd31e316d1a4b38d66af66dfe0edfbe86ac922543a2de6bdcb76f5df900a8639a2e8a864cf582291080213022285e4"
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



import * as React from 'react';
const style = require('./css/style.css');
const image1 = require('./images/cloud_one.png');
const image2 = require('./images/cloud_two.png');
const image3 = require('./images/cloud_three.png');
const image = require('./images/index.png');
export default class Main extends React.Component {

    render(){
        // style={{background:image1}} style={{background:image2}} style={{background:image3}}className={style.tui}
        return(
            <div>
            <div >海阔天空</div>
            <div className={style.sky} >
                <div className={style.clouds_one} ></div>
                <div className={style.clouds_two} ></div>
                <div className={style.clouds_three} ></div>
            </div>
            </div>
        );
    }
}



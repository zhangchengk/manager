import * as React from "react";
import * as ReactDOM from "react-dom";
import { Switch,  Route,HashRouter} from "react-router-dom";
import  MainPage from './pages/mainpage/index';
export default class APP extends React.Component {

    render(){
        return (
            <div>
            <HashRouter>
            <Switch>                                              
                    {/* edit/test this.state.tabletype*/}
                    <Route path="/" component={MainPage} ></Route>
                    <Route path="/manage/" component={MainPage} ></Route>
            </Switch> 
            </HashRouter>
            </div>)
       
    }
}


ReactDOM.render(<APP/> , document.getElementById('root'));
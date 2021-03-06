import React from 'react';
import Login from './Login';
import { HashRouter, Route, Switch} from 'react-router-dom';
import CreateProfile from './CreateProfile';
import './style.css';

class App extends React.Component{
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/createprofile' component={CreateProfile}/>
                    </Switch>
            </HashRouter>
        )
    }
}

export default App;
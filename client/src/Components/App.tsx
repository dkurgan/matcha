import React from 'react';
import Login from './Login';
import { HashRouter, Route, Switch} from 'react-router-dom';
import Register from './Register';
import ButtonAppBar from './NavBar';
import CreateProfile from './CreateProfile';
import './style.css';

class App extends React.Component{
    render() {
        return (
            <HashRouter>
                <Route component={ButtonAppBar}/>
                <Switch>
                    <Route exact path='/' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/createprofile' component={CreateProfile}/>
                    </Switch>
            </HashRouter>
        )
    }
}

export default App;
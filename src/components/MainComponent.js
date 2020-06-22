import React from 'react';
import { Switch, Route, Redirect, Link} from 'react-router-dom';
import Home from './Home';
import TaskComponent from './TaskComponent';

class MainComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route path='/home' component={Home} />
                    <Route path='/main' component={TaskComponent} />
                    <Redirect to='/home' />
                </Switch>
            </React.Fragment>
        );
    }
}

export default MainComponent;
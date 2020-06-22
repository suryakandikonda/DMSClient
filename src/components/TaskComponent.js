import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import DealerHeader from './DealerHeader';
import DealerSideBar from './DealerSideBar';
import { Switch, Route } from 'react-router-dom';
import DealerInventory from './DealerInventory';
import 'semantic-ui-css/semantic.min.css'
import Home from './Home';
import DealerOrders from './DealerOrders';
import DealerAddItems from './DealerAddItems';
import DealerMessages from './DealerMessages';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

class TaskComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            backDropOpen: true,
            snackBarOpen: true
        };

        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false, backDropOpen:false});
        }, 1500);

    }

    handleClose = () => {
        this.setState({
            snackBarOpen:false
        });
    }

    render() {
        function Alert() {
            return <MuiAlert elevation={6} variant="filled"/>;
          }
        if(this.state.isLoading) {
            return (
                <React.Fragment>
                   <Backdrop open={this.state.backDropOpen}>
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </React.Fragment>
            );
        }
        else {
            return (
            
                <React.Fragment>
                    <Snackbar open={this.state.snackBarOpen} autoHideDuration={6000} onClose={this.handleClose} 
                        message="You are logged in Successfully!"
                    >
                       
                        
                    </Snackbar>
                    <DealerHeader />

                    <div className="TaskMain">
                       

                       
                           <Switch>
                               <Route path='/main/inventory' component={DealerInventory} />
                               <Route path='/main/orders' component={DealerOrders} />
                               <Route path='/main/logout' component={Home} />
                               <Route path='/main/additems' component={DealerAddItems} />
                               <Route path='/main/complaints' component={DealerMessages} />
                           </Switch>
                        
                    </div>
                </React.Fragment>
            );
        }
    }
}

export default TaskComponent;
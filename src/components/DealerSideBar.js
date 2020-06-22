import React from 'react';
import { NavLink } from 'react-router-dom';

class DealerSideBar extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <React.Fragment>
                <div className="columnn leftt">
                    <div className="DealerSideBarDiv">

                        <div className="DealerSideBarItem">                   
                            <NavLink to="/main/inventory">
                            <h5><ion-icon name="cart-outline"></ion-icon>  <span className="DealerSideBarText">Inventory</span></h5>
                            </NavLink>
                        </div>
                    
                        <div className="DealerSideBarItem">                   
                            <NavLink to="/main/orders">
                            <h5><ion-icon name="pricetag-outline"></ion-icon>  <span className="DealerSideBarText">Orders</span></h5>
                            </NavLink>
                        </div>
                        
                        <div className="DealerSideBarItem">                  
                            <NavLink to="/main/track">
                            <h5><ion-icon name="bus-outline"></ion-icon> <span className="DealerSideBarText">Track orders</span></h5>
                            </NavLink>
                        </div>
                       
                        <div className="DealerSideBarItem">  
                            <NavLink to="/main/additems">
                            <h5><ion-icon name="add-outline"></ion-icon><span className="DealerSideBarText">Add items</span></h5>
                            </NavLink>
                        </div>

                        <div className="DealerSideBarItem">  
                            <NavLink to="/main/complaints">
                            <h5><ion-icon name="mail-outline"></ion-icon> <span className="DealerSideBarText">Complaints</span></h5>
                            </NavLink>
                        </div>

                        <div className="DealerSideBarItem">  
                            <NavLink to="/main/payments">
                            <h5><ion-icon name="wallet-outline"></ion-icon> <span className="DealerSideBarText">Payment History</span></h5>
                            </NavLink>
                        </div>

                        <div className="DealerSideBarItem">  
                            <NavLink to="/main/stats">
                            <h5><ion-icon name="stats-chart-outline"></ion-icon> <span className="DealerSideBarText">Stats</span></h5>
                            </NavLink>
                        </div>

                        <div className="DealerSideBarItem">  
                            <NavLink to="/main/logout">
                            <h5><ion-icon name="log-out-outline"></ion-icon><span className="DealerSideBarText">Logout</span></h5>
                            </NavLink>
                        </div>

                       
 
                    </div>
                    
                </div>
            </React.Fragment>
        );
    }
}

export default DealerSideBar;
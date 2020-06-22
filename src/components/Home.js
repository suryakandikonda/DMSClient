import React from 'react';
//import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Col, Container, Row} from 'reactstrap';
import { Typography, Avatar } from '@material-ui/core';
import customerOne from '../assets/images/customerImages/1.jpg';
import customerTwo from '../assets/images/customerImages/2.jpg';
import customerThree from '../assets/images/customerImages/3.jpg';
import { Link } from 'react-router-dom';
import { Divider, Grid, Accordion, Icon } from 'semantic-ui-react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            activeIndex: 0
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleClick = this.handleClick.bind(this);
        
    }

    

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state.activeIndex
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

    handleOpen() {
        this.setState({
            open:true
        });
    }

    handleClose() {
        this.setState({
            open:false
        });
    }

    render() {
        return (
            <div>
                <Container>
                    <div className="homeContainerMain">
                        <h1 className="animated fadeInDown">Distribution Management System</h1>
                        <p>A convenient place to manage your orders</p>
                    </div>
                    
                </Container>
                <div><br></br>
                    <Button variant="outlined" color="primary" onClick={this.handleOpen} className="homeLoginButton">
                        Login
                    </Button>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Login</DialogTitle>
                        <DialogContent>
                        <TextField required id="standard-required" label="Username"/><br></br><br></br>
                        <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        />
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleClose} color="primary">
                           <Link to='/main' >Login</Link>
                        </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <br></br><br></br>
                <div className="homeDivTwo">
                    <h4>Customers review</h4>
                    <Container>
                        <Row>
                            <Col sm className="animated flipInY">
                                <div className="homeCard">
                                <div className="heartIcon">
                                    <ion-icon name="star"></ion-icon> 4.3
                                </div>
                                    <div className="homeReview">
                                        <p>
                                            The service provided by them is really good. My business was really expanded after using their Services
                                        </p>             
                                    </div>
                                    <div className="customerInfo">
                                            <Avatar src={customerOne} />
                                            <p><strong>Bob</strong></p>
                                            
                                    </div>
                                </div>
                            </Col>

                            <Col sm className="animated flipInY">
                                <div className="homeCard">
                                <div className="heartIcon">
                                    <ion-icon name="star"></ion-icon> 4.0
                                </div>
                                    <div className="homeReview">
                                        <p>
                                            The service provided by them is really good. My business was really expanded after using their Services
                                        </p>             
                                    </div>
                                    <div className="customerInfo">
                                            <Avatar src={customerTwo} />
                                            <p><strong>Jack</strong></p>
                                            
                                    </div>
                                </div>
                            </Col>

                            <Col sm className="animated flipInY">
                                <div className="homeCard">
                                <div className="heartIcon">
                                    <ion-icon name="star"></ion-icon> 4.7
                                </div>
                                    <div className="homeReview">
                                        <p>
                                            The service provided by them is really good. My business was really expanded after using their Services
                                        </p>             
                                    </div>
                                    <div className="customerInfo">
                                            <Avatar src={customerThree} />
                                            <p><strong>Kristy</strong></p>
                                            
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </div>

                <div className="homeDivThree">
                    <Divider horizontal>How we can be useful?</Divider>

                    <div className="homeDivThreeContent">
                        <Grid columns={2} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <h3><ion-icon name="globe-outline"></ion-icon> <span className="uses">Large network of dealers</span></h3>
                                </Grid.Column>
                                <Grid.Column>
                                    <h3><ion-icon name="call-outline"></ion-icon> <span className="uses">24X7 Customer Support</span> </h3>
                                </Grid.Column>
                                
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                        <h3><ion-icon name="wallet-outline"></ion-icon> <span className="uses">Secure payment methods</span> </h3>
                                </Grid.Column>
                                <Grid.Column>
                                    <h3><ion-icon name="bus-outline"></ion-icon> <span className="uses">Easy track of orders</span> </h3>
                                </Grid.Column>
                                
                            </Grid.Row>
                        </Grid>
                    </div>
                </div>

                <div className="homeDivFour">

                <h3>FAQ</h3><br></br>
                <Accordion styled>
        <Accordion.Title
          active={this.state.activeIndex === 0}
          index={0}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How to get started with DMS?
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 0}>
          <p>
            If you are a retailer, just create a account and Search products in our catalogue. Or, if you are a Dealer, just get a dealer account.
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={this.state.activeIndex === 1}
          index={1}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          Is there any fee, to be a dealer?
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 1}>
          <p>
            dnhfdfndfjdnjfnjfdnfknfjdnfjdnfjknfjfnjkfdn
          </p>
        </Accordion.Content>

        <Accordion.Title
          active={this.state.activeIndex === 2}
          index={2}
          onClick={this.handleClick}
        >
          <Icon name='dropdown' />
          How can I contact customer support?
        </Accordion.Title>
        <Accordion.Content active={this.state.activeIndex === 2}>
          <p>
            dsdnsjdnfmkfmkfmfkdmkfm
          </p>
          
        </Accordion.Content>
      </Accordion>
                    
                </div>
            </div>
        );
    }
}

export default Home;
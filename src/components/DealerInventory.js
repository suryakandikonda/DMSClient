import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Backdrop from '@material-ui/core/Backdrop';
import { Loader, Card, Icon, Grid, Popup, Header, Button } from 'semantic-ui-react';
import { Placeholder, Table, Image } from 'semantic-ui-react';
import Items from '../shared/inventory';

import Iron from '../assets/images/dealerInventoryImages/iron.jpg';

class DealerInventory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Items,
            isLoading: true,
            backDropOpen: true
        }
    
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoading: false, backDropOpen:false});
        }, 1000);

    }

    

    render () {
        const itemDetails = this.state.items.map((item) => {
            return (
                <div></div>
            );
        })
        if(this.state.isLoading) {
            return (
                <React.Fragment>
                    <div className="PlaceHolder">
                        <Placeholder>
                            <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            </Placeholder.Paragraph>
                            <Placeholder.Paragraph>
                            <Placeholder.Line />
                            <Placeholder.Line />
                            <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </div>
                   
                </React.Fragment>
            );
        }
        else {
            return (
                <React.Fragment>
                    <div className="DealerInventoryTable">
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Popup trigger={
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                        } flowing hoverable>
                                            <Grid centered divided columns={3}>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Modify</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Update Stock</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Delete Product</Button>
                                                </Grid.Column>
                                                </Grid>
                                        </Popup>
                                        
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Popup trigger={
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                        } flowing hoverable>
                                            <Grid centered divided columns={3}>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Modify</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Update Stock</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Delete Product</Button>
                                                </Grid.Column>
                                                </Grid>
                                        </Popup>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Popup trigger={
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                        } flowing hoverable>
                                            <Grid centered divided columns={3}>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Modify</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Update Stock</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Delete Product</Button>
                                                </Grid.Column>
                                                </Grid>
                                        </Popup>
                                        
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Popup trigger={
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                        } flowing hoverable>
                                            <Grid centered divided columns={3}>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Modify</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Update Stock</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Delete Product</Button>
                                                </Grid.Column>
                                                </Grid>
                                        </Popup>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>

                            <Grid.Row>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Popup trigger={
                                            <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                        } flowing hoverable>
                                            <Grid centered divided columns={3}>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Modify</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Update Stock</Button>
                                                </Grid.Column>
                                                <Grid.Column textAlign='center'>
                                                    
                                                    
                                                    <Button>Delete Product</Button>
                                                </Grid.Column>
                                                </Grid>
                                        </Popup>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                                <Grid.Column>
                                    <Card>
                                        <Image src={Iron} wrapped ui={false} />
                                        <Card.Content>
                                            <Card.Header>Iron</Card.Header>
                                            <Card.Meta>
                                                Product code: 4454
                                            </Card.Meta>
                                        </Card.Content>
                                        <Card.Content extra>
                                            <a>
                                                <Icon name='edit' />
                                                Modify product details
                                            </a>
                                        </Card.Content>
                                    </Card>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        
                    </div>
                    
                </React.Fragment>
            );
        }
        
    }
}

export default DealerInventory;
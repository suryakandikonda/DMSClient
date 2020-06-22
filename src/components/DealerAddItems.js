import React from 'react';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Input, Button } from 'semantic-ui-react';


class DealerAddItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <div className="DealerAddItemsDiv">
                    <h3>Add item: </h3>
                    <Card>
                        <CardContent>
                        <Input placeholder='Product name' /><br></br><br></br>
                        <Input placeholder='Dealer name' /><br></br><br></br>
                        <Input placeholder='Location' /><br></br><br></br>
                        <Input disabled placeholder='Product code: 455 ' /><br></br><br></br>
                        <Button primary>Add item</Button>
                        </CardContent>  
                    </Card>
                </div>
            </React.Fragment>
        );
    }
}

export default DealerAddItems;
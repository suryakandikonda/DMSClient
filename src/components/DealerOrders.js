import React from 'react';
import { Dropdown, Table, Checkbox } from 'semantic-ui-react';
import { TableCell } from '@material-ui/core';
import Orders from '../shared/orders';

class DealerOrders extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: Orders
        };
    }

    render() {

        const options = [
            { key: 1, text: 'Pending', value: 'Pending'},
            { key: 2, text: 'Ready to dispatch', value: 'Dispatch'},
            { key: 3, text: 'Delivered', value: 'Delivered'}
        ];

        const OrderDetails = this.state.orders.map((order) => {
            return (
                <Table.Row>
                <Table.Cell>
                    <Checkbox label={{ children: ''}} />
                </Table.Cell>
                <TableCell>{order.ordedid}</TableCell>
                <TableCell>{order.created}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>
                <Dropdown
                clearable options={options} selection defaultValue={options[0].text}
                />
                </TableCell>
                </Table.Row>
            );
        })
        return (
            <div className="roww">
                <div className="columnn OrderLeft">
                    <div>
                        <h3>Orders</h3>
                        <Dropdown
                        inline
                        options={'Sdd','mksdmkd'} />
                    </div>

                    <div>
                        <Table basic='very' celled collapsing>
                            <Table.Header>
                                <Table.Row>
                                    <Table.HeaderCell>#</Table.HeaderCell>
                                    <Table.HeaderCell>Order Id</Table.HeaderCell>
                                    <Table.HeaderCell>Created</Table.HeaderCell>
                                    <Table.HeaderCell>Customer</Table.HeaderCell>
                                    <Table.HeaderCell>Total</Table.HeaderCell>
                                    <Table.HeaderCell>Status</Table.HeaderCell>
                                </Table.Row>
                            </Table.Header>

                            <Table.Body>
                                {OrderDetails}
                            </Table.Body>
                        </Table>
                    </div>
                </div>

                <div className="columnn OrderRight">
                    <div className="OrdersRightItem">
                        <h5>Overview</h5>
                    </div>

                    <div className="OrdersRightItem">
                        <h6><strong>Orders Today</strong></h6>
                        <h3>239</h3>
                    </div>

                    <div className="OrdersRightItem">
                        <h6><strong>Pending Orders</strong></h6>
                        <h3>12</h3>
                    </div>

                    <div className="OrdersRightItem">
                        <h6><strong>Delivered</strong></h6>
                        <h3>128</h3>
                    </div>

                    <div className="OrdersRightItem">
                        <h6><strong>Cancelled</strong></h6>
                        <h3>25</h3>
                    </div>
                </div>

            </div>
        );
    }
}

export default DealerOrders;
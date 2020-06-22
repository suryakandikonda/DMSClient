import React from 'react';
import { Card } from '@material-ui/core';
import { Table, Modal } from 'semantic-ui-react';

class DealerMessages extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const textt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis urna lorem, lobortis eget neque eget, luctus aliquam neque. Proin tempus congue aliquet. Integer faucibus commodo sollicitudin. Curabitur semper fermentum urna, eget hendrerit neque tincidunt vitae. Vestibulum lacinia ex ut porttitor consequat. Nunc quis felis sit amet odio aliquam tincidunt. Vivamus tempus, lorem eget suscipit iaculis, dui lectus faucibus magna, vel aliquam eros nulla at arcu. Maecenas tempor scelerisque sem sit amet ultrices. Maecenas blandit metus quis erat dapibus faucibus. Etiam eleifend euismod elit non pharetra. Integer ultrices posuere eros, nec pulvinar velit sagittis vel. Aliquam erat volutpat. Nullam vitae lorem vel ante vehicula vehicula. Nullam quis ullamcorper lectus.';
        return (
            <React.Fragment>
                    <div>
                        <h2>Messages:</h2>
                    </div>
                    <Table>
                        <Table.Body>
                        <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                        <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                            <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                            <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

<Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                        <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                            <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />

                            <Modal
                            trigger={
                                <Table.Row>
                                <Table.Cell>
                                    #
                                </Table.Cell>
                                <Table.Cell>
                                    <strong>Regarding Invoice</strong><br></br>
                                    Alex
                                </Table.Cell>
                                <Table.Cell> 15 min ago</Table.Cell>
                            </Table.Row>
                            }
                            header='Regarding Invoice'
                            content={textt}
                            actions={['OK']}
                            />
                        </Table.Body>
                    </Table>
                
            </React.Fragment>
        );
    }
}

export default DealerMessages;
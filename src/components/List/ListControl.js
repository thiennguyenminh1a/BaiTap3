import React from 'react';
import { Button } from 'reactstrap';
import './ListControl.css'

import TableControl from './Table/TableControl';

class ListControl extends React.Component {

    render() {

        const columns = [
            { title: 'NAME', key: 'name', render: (name) => name },
            { title: 'DUE DATE', key: 'date', render: (date) => date },
            { title: 'ASSIGNNE', key: 'assignne', render: (assignne) => assignne },
            { title: 'STATUS', key: 'status', render: (status) => status },
            {
                title: '', key: 'id', render: (id) => {
                    return (
                        <div>
                            <Button color="warning" onClick={() => this.props.onUpdate(id)}>Update</Button>{' '}
                            <Button color="danger" onClick={() => this.props.onDelete(id)}>Delete</Button>{' '}
                        </div>
                    )
                }

            }
        ]

        return (
            <TableControl data={this.props.state.tasks} columns={columns} state={this.props.state} />
        )
    }
}

export default ListControl;